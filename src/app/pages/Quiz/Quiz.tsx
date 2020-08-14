import React, {useContext, useEffect, useRef, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent, IonIcon,
    IonList,
    IonPage
} from "@ionic/react";
import './Quiz.scss';

import {ErrorContext, SearchPostContext} from "../../components/split-pane/Content";
import {LoadingSpinner} from "../../components/Spinner";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import {close} from "ionicons/icons";

const Quiz = ({ ...props }) => {

    const [quiz, setQuiz] = useState(null as any);
    const [quizDetails, setQuizDetails] = useState(null as any);
    const [level, setLevel] = useState(5);
    const [wrongAnswers, setWrongAnswers] = useState([] as any);
    const [selected, setSelected] = useState(false as any);
    const [finish, setFinish] = useState(false);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const searchPostContext = useContext(SearchPostContext);
    const answer1 = useRef(null as any);
    const answer2 = useRef(null as any);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getQuiz(props.match.url)
            .then(data => {
                setQuiz(data?.content);
                setQuizDetails(data?.details)
            })
            .catch(error => errorContext.setMessage(error))
            .finally(() => loadContext.setLoading(false));

        return () => {
            setLevel(0);
            setWrongAnswers([]);
            setQuiz(null);
            setFinish(false);
        }
    }, [props.match.url]);

    function nextQuestion(answer: number, object: any) {

        setSelected(answer);

        let correctAnswer = false;
        if (answer === quiz.questions[level].answer) {
            correctAnswer = true;
            object.current.classList.add('correct');
        } else {
            setWrongAnswers([...wrongAnswers, {
                level: level,
                question: quiz.questions[level].question,
                answer: quiz.questions[level].answer === 1 ?
                    quiz.questions[level].choice1 : quiz.questions[level].choice2
            }]);
            object.current.classList.add('wrong');
        }

        setTimeout(() => {
            if (level + 1 >= quiz.questions.length) {
                setFinish(true);
            } else {
                setLevel(level + 1);
            }
            setSelected(false);
            answer1.current?.classList.remove('correct', 'wrong');
            answer2.current?.classList.remove('correct', 'wrong');
        }, correctAnswer ? 1200 : 2500);
    }

    return (
        <IonPage id="main">
            <IonContent className={searchPostContext.isSearching_mobile ? "quiz-content mobile-search-content--open" : "quiz-content"}>
                <IonCard className="quiz-card">
                    <IonList className="quiz-list">
                        <div className="quiz-header">
                            <h1>{quizDetails?.title}</h1>
                            <h4>{quizDetails?.description}</h4>
                        </div>
                        {loadContext.isLoading && !quiz && <LoadingSpinner/>}
                        {quiz &&
                            <div className="hud">
                                <div className="hud-item-questions">
                                    <p className="hud-prefix unselectable">
                                        Frage
                                    </p>
                                    <h1 className="hud-main-text unselectable" id="questionCounter">
                                        {level + 1} / {quiz.questions.length}
                                    </h1>
                                </div>
                                <div className="hud-item-wrong-answers">
                                    <p className="hud-prefix unselectable">
                                        Fehler
                                    </p>
                                    <h1 className="hud-main-text unselectable" id="score">
                                        {wrongAnswers.length}
                                    </h1>
                                </div>
                            </div>
                        }
                        {quiz && !finish &&
                            <Questions quiz={quiz}
                                       level={level}
                                       nextQuestion={nextQuestion}
                                       answer1={answer1}
                                       answer2={answer2}
                                       selected={selected}/>
                        }
                        {finish &&
                            <FinishScreen finish={finish}
                                          setFinish={setFinish}
                                          setLevel={setLevel}
                                          setWrongAnswers={setWrongAnswers}
                                          wrongAnswers={wrongAnswers}/>
                        }
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

const Questions = ({ ...props }) => {
    return (
        <div className={props.selected ? "quiz-container selected" : "quiz-container"}>
            <h2 className="unselectable">{props.quiz.questions[props.level].question}</h2>
            <div className="choice-container"
                 onClick={() => {
                     if (!props.selected) props.nextQuestion(1, props.answer1)
                 }}
                 ref={props.answer1}
            >
                <div className="choice-prefix">
                    {props.selected === 1 ?
                        props.quiz.questions[props.level].answer === 1 ? <SuccessSVG/> : <IonIcon src={close}/>
                        :
                        <p className="unselectable">A</p>
                    }
                </div>
                <p className="choice-text unselectable">{props.quiz.questions[props.level].choice1}</p>
            </div>
            <div className="choice-container"
                 onClick={() => {
                     if (!props.selected) props.nextQuestion(2, props.answer2)
                 }}
                 ref={props.answer2}
            >
                <div className="choice-prefix">
                    {props.selected === 2 ?
                        props.quiz.questions[props.level].answer === 2 ? <SuccessSVG/> : <IonIcon src={close}/>
                        :
                        <p className="unselectable">B</p>
                    }
                </div>
                <p className="choice-text unselectable">{props.quiz.questions[props.level].choice2}</p>
            </div>
        </div>
    )
};

const SuccessSVG = () => {
    return (
        <svg className="correctCheckmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <path className="correctCheckmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    )
};

const FinishScreen = ({ ...props }) => {

    const finishText = [
        'Du hast das Quiz ohne Fehler abgeschlossen',
        'Du hattest einen Fehler',
        'Du hattest zwei Fehler',
        'Du hattest drei Fehler',
        'Du hattest vier Fehler',
        'Du hattest fünf Fehler',
        'Du hattest mehr als 5 Fehler',
    ];

    const finishEmoji = [
        '⭐',
        '👍',
        '😐',
        '😲',
        '🤨',
        '😦',
        '😵',
    ];

    function restart() {
        props.setFinish(false);
        props.setLevel(0);
        props.setWrongAnswers([]);
    }

    useEffect(() => {
        setTimeout(() => {
            const successAnimation = document.getElementById('successAnimation');
            successAnimation?.classList.add('animated');
        }, 0);
    }, [props.finish]);

    const questions = props.wrongAnswers;

    return (
        <div className="finishContainer">
            <h2 className="doneLabel">Fertig</h2>
            <h3 className="congratText" ref={props.finishText}>
                {finishText[questions.length > 6 ? 6 : questions.length]}
            </h3>
            <div className="congratEmoji" ref={props.finishEmoji}>
                {questions.length >= 1 && finishEmoji[questions.length > 6 ? 6 : questions.length]}
                {questions.length === 0 &&
                    <div className="success-animation">
                        <svg className="successMark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="successMark__circle" cx="26" cy="26" r="25" fill="none"/>
                            <path className="successMark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                }
            </div>
            {questions && questions.map((el: any, index: number) =>
                <div className="wrong-answers-container" key={index}>
                    <h2 className="question">{questions[index].level+1}. {questions[index].question}</h2>
                    <h3 className="answer">{questions[index].answer}</h3>
                </div>
            )}
            <IonButton fill="outline" mode="md" onClick={restart}>Neustarten</IonButton>
        </div>
    )
};

export default Quiz;
