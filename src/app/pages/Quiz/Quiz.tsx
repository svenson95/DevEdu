import React, {useContext, useEffect, useRef, useState} from "react";
import {
    IonButton,
    IonCard,
    IonContent, IonIcon,
    IonList,
    IonPage
} from "@ionic/react";
import './Quiz.scss';

import {ErrorContext} from "../../components/split-pane/Content";
import {LoadingSpinner} from "../../components/Spinner";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import {checkmark, close} from "ionicons/icons";

const Quiz = ({ ...props }) => {

    const [quiz, setQuiz] = useState(null as any);
    const [level, setLevel] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState([] as any);
    const [selected, setSelected] = useState(false as any);
    const [finish, setFinish] = useState(false);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);
    const answer1 = useRef(null as any);
    const answer2 = useRef(null as any);
    const article = JSON.parse(localStorage.getItem("selectedPost")!);

    useEffect(() => {

        loadContext.setLoading(true);
        DataService.getQuiz(props.match.url)
            .then(data => setQuiz(data[0]))
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
                answer: quiz.questions[level].answer === 1 ? quiz.questions[level].choice1 : quiz.questions[level].choice2
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
        }, correctAnswer ? 1000 : 3000);
    }

    return (
        <IonPage id="main">
            <IonContent className="quiz-content">
                <IonCard className="quiz-card">
                    <IonList className="quiz-list">
                        <div className="quiz-header">
                            <h1>{article.title}</h1>
                            <h4>{article.description}</h4>
                        </div>
                        {loadContext.isLoading && !quiz && <LoadingSpinner/>}
                        {quiz &&
                            <div className="hud">
                                <div className="hud-item-questions">
                                    <p className="hud-prefix unselectable">
                                        Frage
                                    </p>
                                    <h1 className="hud-main-text unselectable" id="questionCounter">
                                        {level + 1} / {quiz?.questions.length}
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
                            <FinishScreen setFinish={setFinish}
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
        <div className="quiz-container">
            <h2 className="unselectable">{props.quiz.questions[props.level].question}</h2>
            <div className="choice-container"
                 onClick={() => {
                     if (!props.selected) props.nextQuestion(1, props.answer1)
                 }}
                 ref={props.answer1}
            >
                <div className="choice-prefix">
                    {props.selected === 1 ?
                        <IonIcon src={props.quiz.questions[props.level].answer === 1 ? checkmark : close}/>
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
                        <IonIcon src={props.quiz.questions[props.level].answer === 2 ? checkmark : close}/>
                        :
                        <p className="unselectable">B</p>
                    }
                </div>
                <p className="choice-text unselectable">{props.quiz.questions[props.level].choice2}</p>
            </div>
        </div>
    )
};

const FinishScreen = ({ ...props }) => {

    const questions = props.wrongAnswers;
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
    return (
        <div className="congratContainer">
            <h2 className="done">Fertig</h2>
            <h3 className="congratText" ref={props.finishText}>
                {finishText[questions.length > 6 ? 6 : questions.length]}
            </h3>
            <p className="congratEmoji" ref={props.finishEmoji}>
                {finishEmoji[questions.length > 6 ? 6 : questions.length]}
            </p>
            {questions && questions.map((el: any, index: number) =>
                <div className="wrong-answers-container" key={index}>
                    <h2 className="question">{questions[index].level+1}. {questions[index].question}</h2>
                    <h3 className="answer">{questions[index].answer}</h3>
                </div>
            )}
            <IonButton fill="outline" onClick={restart}>Neustarten</IonButton>
        </div>
    )
};

export default Quiz;
