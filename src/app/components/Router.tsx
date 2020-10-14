import React, {useContext} from "react";
import {IonRouterOutlet} from "@ionic/react";
import {Redirect, Route} from "react-router";

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

import {areas} from "../../data/menuTitles";
import {AuthContext} from "../context/auth.context";

const subjectPaths = [
    "/lf-1",
    "/lf-2",
    "/lf-3",
    "/lf-4-1",
    "/lf-4-2",
    "/lf-5",
    "/lf-6",
    "/lf-7",
    "/lf-8",
    "/lf-9",
    "/wp",
    "/wiso",
    "/englisch",
    "/deutsch"
];

export const Router = () => {
    const areaUrls = areas.map(el => el.url);
    const authContext = useContext(AuthContext);
    const articleUrls = subjectPaths.map(subject => subject + "/:topic/:article");
    const quizUrls = subjectPaths.map(subject => subject + "/:topic/:quiz/quiz");
    const editUrls = subjectPaths.map(subject => subject + "/:topic/:article/edit");

    return (
        <IonRouterOutlet id="main">
            <Route path="/login" render={() => authContext.isAuthenticated ?
                <Redirect to="/dashboard" exact /> : <Login/>
            } exact />
            <Route path="/dashboard" render={props => authContext.isAuthenticated ?
                <Dashboard {...props} /> : <Redirect to="/" exact />
            } exact />
            <Route path="/my-profile" render={() => authContext.isAuthenticated ?
                <MyProfile/> : <Redirect to="/" exact />
            } exact />
            <Route path={subjectPaths} render={props => <Subject {...props} />} exact />
            <Route path={articleUrls} render={props => <Post {...props} />} exact />
            <Route path={quizUrls} render={props => <Quiz {...props} />} exact />
            <Route path={editUrls} render={props => <EditPost {...props} />} exact />
            <Route path={areaUrls} render={props => <Area {...props} />} exact />
            <Route path="/lehrmaterial" render={() => <LearningResources/>} exact />
            <Route path="/vertretungsplan" render={props => <SubstitutionSchedule {...props} />} exact />
            <Route path="/lehrer" render={props => <Teachers {...props} />} exact />
            <Route path="/klausuren" render={props => <Exams {...props} />} exact />
            <Redirect from="/" to="/login" exact />
            <Route component={NotFound} />
        </IonRouterOutlet>
    )
};
