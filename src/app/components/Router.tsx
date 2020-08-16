import React, {useContext} from "react";
import {IonRouterOutlet} from "@ionic/react";
import {Redirect, Route} from "react-router";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import {Subject} from "../pages/Subject/Subject";
import Post from "../pages/Post/Post";
import Quiz from "../pages/Quiz/Quiz";
import EditPost from "../pages/EditPost/EditPost";
import {Area} from "../pages/Area/Area";
import LearningResources from "../pages/LearningResources/LearningResources";
import SubstitutionSchedule from "../pages/SubstitutionSchedule/SubstitutionSchedule";
import Teachers from "../pages/Teacher/Teachers";
import Exams from "../pages/Exams/Exams";
import {NotFound} from "../pages/NotFound";

import {subjectPaths} from "./split-pane/Content";
import {areas} from "../../data/menuTitles";
import {AuthContext} from "../context/auth.context";

export const Router = () => {
    const articleUrls = subjectPaths.map(subject => subject + "/:topic/:article");
    const quizUrls = subjectPaths.map(subject => subject + "/:topic/:quiz/quiz");
    const editUrls = subjectPaths.map(subject => subject + "/:topic/:article/edit");
    const areaUrls = areas.map(el => el.url);
    const authContext = useContext(AuthContext);

    return (
        <IonRouterOutlet id="main">
            <Route path="/home" render={() => <Home/>} exact />
            <Route path="/login" render={() => authContext.isAuthenticated ?
                <Redirect to="/dashboard" exact /> : <Login/>
            } exact />
            <Route path="/dashboard" render={() => authContext.isAuthenticated ?
                <Dashboard/> : <Redirect to="/home" exact />
            } exact />
            <Route path="/my-profile" render={() => authContext.isAuthenticated ?
                <MyProfile/> : <Redirect to="/home" exact />
            } exact />
            <Route path={subjectPaths} render={props => <Subject {...props} />} exact />
            <Route path={articleUrls} render={props => <Post {...props} />} exact />
            <Route path={quizUrls} render={props => <Quiz {...props} />} exact />
            <Route path={editUrls} render={props => authContext?.user?.role === "admin" ?
                <EditPost {...props} /> : <Redirect to="/dashboard" exact/>
            } exact />
            <Route path={areaUrls} render={props => <Area {...props} />} exact />
            <Route path="/lehrmaterial" render={() => <LearningResources/>} exact />
            <Route path="/vertretungsplan" render={props => <SubstitutionSchedule {...props} />} exact />
            <Route path="/lehrer" render={props => <Teachers {...props} />} exact />
            <Route path="/klausuren" render={props => <Exams {...props} />} exact />
            <Redirect from="/" to="/home" exact />
            <Route component={NotFound} />
        </IonRouterOutlet>
    )
};
