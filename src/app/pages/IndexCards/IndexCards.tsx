import React, {useContext, useEffect, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent,
    IonList,
    IonPage
} from "@ionic/react";
import './IndexCards.scss';

import {ErrorContext, SearchPostContext} from "../../app-common/split-pane/Content";
import {LoadingSpinner} from "../../components/Spinner";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import transformDate from "../../app-common/transform-date";
import Interweave from "interweave";

const IndexCards = ({ ...props }) => {

    const [indexCards, setIndexCards] = useState(null as any);
    const [quizDetails, setQuizDetails] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getIndexCards(props.match.url)
            .then(data => {
                document.title = document.title + ' - ' + data?.details.title + ' - tecbook';
                setIndexCards(data?.content);
                setQuizDetails(data?.details)
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => {
            setIndexCards(null);
        }
    }, [props.match.url]);

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "quiz-content mobile-search-content--open" : "quiz-content"}>
                <IonCard className="quiz-card">
                    <IonList className="quiz-list">
                        <div className="quiz-header">
                            <h1>{quizDetails?.title}</h1>
                            <h4>{quizDetails?.description}</h4>
                        </div>
                        {loadContext.isLoading && !indexCards && <LoadingSpinner/>}
                        {indexCards &&
                            <IndexCard questions={indexCards.questions}/>
                        }
                        {indexCards &&
                            <div className="ddu-last-update-label">
                                <span>Letzte Aktualisierung: {transformDate(indexCards?.lastUpdate)}</span>
                            </div>
                        }
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

const IndexCard = ({...props}) => {
    const [level, setLevel] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    return (
        <div className="tbk-index-card">
            <div className="tbk-card-header">
                <span>{level + 1} von {props.questions.length}</span>
            </div>
            <div className="tbk-card-content">
                <Interweave content={showAnswer ? props.questions[level].answer : props.questions[level].question}/>
            </div>
            <div className="tbk-card-buttons">
                {!showNextButton &&
                    <IonButton className="text-button" fill="outline" mode="md" onClick={() => {
                        setShowAnswer(true);
                        setShowNextButton(true);
                    }}>
                        <p>Antwort anzeigen</p>
                    </IonButton>
                }
                {showNextButton && props.questions[level + 1] !== undefined &&
                    <IonButton className="tbk-next-question text-button" fill="outline" mode="md" onClick={() => {
                        setLevel(level + 1);
                        setShowAnswer(false);
                        setShowNextButton(false);
                    }}>
                        <p>Nächste Frage</p>
                    </IonButton>
                }
                {props.questions[level + 1] === undefined && showAnswer &&
                    <IonButton class="tbk-restart-index-cards text-button" fill="outline" mode="md" onClick={() => {
                        setLevel(0);
                        setShowAnswer(false);
                        setShowNextButton(false);
                    }}>
                        <p>Zurück zum Anfang</p>
                    </IonButton>
                }
            </div>
        </div>
    )
}

export default IndexCards;
