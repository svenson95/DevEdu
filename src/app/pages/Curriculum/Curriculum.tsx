import React, {useContext, useEffect, useState} from 'react';
import {
    IonCard,
    IonContent,
    IonList,
    IonPage,
} from '@ionic/react';
import {useHistory} from "react-router";
import './Curriculum.scss';

import DataService from "../../services/data.service";
import {ErrorContext, SearchPostContext} from "../../app-common/split-pane/Content";
import {LoadContext} from "../../../App";
import {LoadingSpinner} from "../../components/Spinner";
import {subjects} from "../../../data/menuTitles";
import typeName from "../../app-common/type-name";

const Curriculum = ({ ...props }) => {

    const [weeksData, setWeeksData] = useState(null as any)
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);
    const history = useHistory();

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getAllWeeks()
            .then(weeks => {
                setWeeksData(weeks);
            })
            .catch(err => errorContext.setMessage(err))
            .finally(() => loadContext.setLoading(false));

    }, []);

    const firstWeekDay = (index: number) => {
        return dateConverter(weeksData[index].posts[0].lessonDate);
    };
    const lastWeekDay = (index: number) => {
        return dateConverter(weeksData[index].posts[weeksData[index].posts.length-1].lessonDate);
    };
    const fullSubjectName = (subject: string) => {
        return subjects.find(el => el.url.substring(1) === subject)?.title;
    };

    function dateConverter(date: any) {
        const day = date.slice(8, 10);
        const month = date.slice(5, 7);
        const year = date.slice(0, 4);
        return day + '.' + month + '.' + year;
    }

    return (
        <IonPage>
            <IonContent className={searchPostContext.isSearching_mobile ? "mobile-search-content--open" : ""}>
                <div className="tbk-week-card-wrapper">
                    {weeksData && weeksData.map((week: any, index: number) =>
                        <IonCard className="ddu-school-week-card" key={index} mode="md">
                            <IonList>
                                <div className="card-header">
                                    <h1>Schulwoche #{week.schoolWeek}</h1>
                                    <h4>{firstWeekDay(index)} - {lastWeekDay(index)}</h4>
                                </div>
                                {week.posts.map((post: any, index: number) =>
                                        <div className="ddu-post-wrapper" key={index}>
                                            <h2>
                                                <span className="lesson-label unselectable">{fullSubjectName(post.subject)}</span>
                                                <span className="dashboard-post" onClick={() => history.push(post.subject + "/" + post.details.url)}>
                                    <span className="post-title">{post?.details?.title}</span>
                                    <span className="tbk-post-description">
                                            <span className="tbk-description-label">{post?.details?.description}</span>
                                            <span className={`tbk-post-type ${post?.details?.type}`}>
                                                {typeName(post?.details?.type)}
                                            </span>
                                        </span>
                                </span>
                                            </h2>
                                        </div>
                                )}
                            </IonList>
                        </IonCard>
                    )}
                    {loadContext.isLoading && weeksData === null &&
                    <LoadingSpinner/>
                    }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Curriculum;
