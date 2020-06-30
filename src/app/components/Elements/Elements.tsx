import Interweave from "interweave";
import React, {Fragment, useContext, useEffect, useState} from "react";
import './Elements.scss';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {fetchImage} from "../../services/http.service";
import {ErrorContext} from "../split-pane/Content";
import {LoadingSpinner} from "../Spinner";
import {LoadContext} from "../../../App";

export const Elements = ({ ...props }) => {

    function changePost(newValue: any) {
        const oldEl = props.elements.find((el: any) => el.content === props.el.content);

        let elements = props.elements;
        let newEl = elements.find((el: any) => el.content === oldEl.content);
        newEl.content = newValue;
        props.setElements(elements);
    }

    function changeList(oldValue: any, newValue: any, index: number | null) {
        const oldEl = props.elements.find((el: any) => el.type === "list" && el === props.el);

        let elements = props.elements;
        let newEl = elements.find((el: any) => el.type === "list" && el === oldEl);

        if (index === null || 0) {
            newEl.content = newValue;
        } else {
            newEl.list[index] = newValue;
        }
        props.setElements(elements);
    }

    return (
        <div className="article__element">
            {props.el.type === "title" &&
                <>{props.isEditable ?
                    <h2 contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={event => changePost(event.currentTarget.textContent)}
                    >
                        <Interweave content={props.el.content}/>
                    </h2>
                    :
                    <h2><Interweave content={props.el.content}/></h2>
                }</>
            }
            {props.el.type === "subtitle" &&
                <>{props.isEditable ?
                    <h3 contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={event => changePost(event.currentTarget.textContent)}
                    >
                        <Interweave contentEditable={true} content={props.el.content}/>
                    </h3>
                    :
                    <h3><Interweave content={props.el.content}/></h3>
                }</>
            }
            {props.el.type === "text" &&
                <>{props.isEditable ?
                    <p contentEditable={true}
                       suppressContentEditableWarning={true}
                       onInput={event => changePost(event.currentTarget.textContent)}
                    >
                        <Interweave content={props.el.content}/>
                    </p>
                    :
                    <p><Interweave content={props.el.content}/></p>
                }</>
            }
            {props.el.type === "line" &&
                <Interweave content={props.el.content}/>
            }
            {props.el.type === "quiz" &&
                <QuizFrame url={props.el.content} />
            }
            {props.el.type === "image" &&
                <Image
                    el={props.el}
                    elements={props.elements}
                    path={props.path}
                    setShowImage={props.setShowImage}
                    url={props.el.content}
                    isEditable={props.isEditable}
                    setShowPopover={props.setShowPopover}
                />
            }
            {props.el.type === "table" &&
                <div className="table__wrapper">
                    {props.isEditable ?
                        <div contentEditable={true} suppressContentEditableWarning={true}>
                            {props.el.content && <p><Interweave content={props.el.content}/></p>}
                            <Table tableElement={props.el} />
                        </div>
                        :
                        <Fragment>
                            {props.el.content && <p><Interweave content={props.el.content}/></p>}
                            <Table tableElement={props.el} />
                        </Fragment>
                    }
                </div>
            }
            {props.el.type === "list" &&
                <List listElement={props.el} changeList={changeList} isEditable={props.isEditable}/>
            }
            {props.el.type === "code" &&
                <>{props.isEditable ?
                    <div className="element__code" contentEditable={true} suppressContentEditableWarning={true}>
                        <CodeElement content={props.el.content} />
                    </div>
                    :
                    <CodeElement content={props.el.content} />
                }</>
            }
            {props.isEditable &&
                <div className="deletePost__button" onClick={() => {
                    return props.setElements(props.elements.filter((el: any) => el !== props.el))
                }}>
                    Entfernen
                </div>
            }
        </div>
    )
};

const Image = ({ ...props }) => {

    const [image, setImage] = useState(null as any);
    const loadContext = useContext(LoadContext);
    const errorContext = useContext(ErrorContext);

    useEffect(() => {
        if (props.url) {
            loadContext.setLoading(true);
            fetchImage(props.url)
                .then(data => setImage("data:image/png;base64," + data.data))
                .catch(err => errorContext.setMessage(err))
                .finally(() => loadContext.setLoading(false))
        }
    }, [props.url]);

    return loadContext.isLoading ?
        <LoadingSpinner/>
        :
        <>{props.isEditable ?
            <div onClick={() => props.setShowPopover(props.url)}>
                <img alt="post_image" src={image}/>
            </div>
            :
            <div onClick={() => image && props.setShowImage(image)}>
                <img alt="post_image" src={image}/>
            </div>
        }</>
};

const List = ({ ...props }) => {
    return (
        <ul>
            {props.isEditable ?
                <p contentEditable={true}
                   suppressContentEditableWarning={true}
                   onInput={event => props.changeList(props.listElement.content, event.currentTarget.textContent, null)}
                >
                    <Interweave content={props.listElement.content}/>
                </p>
                :
                <p><Interweave content={props.listElement.content}/></p>
            }
            {props.listElement.list?.map((listItem: any, index: number) =>
                <li key={index}>
                    {props.isEditable ?
                        <p contentEditable={true}
                           suppressContentEditableWarning={true}
                           onInput={event => props.changeList(listItem.content, event.currentTarget.textContent, index)}
                        >
                            <Interweave content={listItem.content || listItem} />
                        </p>
                        :
                        <p><Interweave content={listItem.content || listItem} /></p>
                    }
                    {listItem.sublist &&
                        <ul>
                            {listItem.sublist.map((item: any, index: number) =>
                                props.isEditable ?
                                    <li key={index}
                                        className="list__second"
                                        contentEditable={true}
                                        suppressContentEditableWarning={true}
                                        onInput={event => props.changeList(item, event.currentTarget.textContent, index)}
                                    >
                                        <Interweave content={item}/>
                                    </li>
                                    :
                                    <li key={index} className="list__second">
                                        <Interweave content={item}/>
                                    </li>
                            )}
                        </ul>
                    }
                </li>
            )}
        </ul>
    )
};

const Table = ({ ...props }) => {
    return (
        <table className="inline">
            <tbody>
                {props.tableElement.rows.map((row: any, index: number) =>
                    <tr key={index} className={"row" + index}>
                        {row.columns.map((column: any, index: number) =>
                            <Fragment key={index}>
                                {row.type === "header" ?
                                    column.colSpan ?
                                        <th colSpan={column.colSpan} className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </th>
                                        :
                                        <th className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </th>
                                    :
                                    column.colSpan ?
                                        <td colSpan={column.colSpan} className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </td>
                                        :
                                        <td className={`col${index} ${column.align}`}>
                                            <Interweave content={column.content}/>
                                        </td>

                                }
                            </Fragment>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
};

const QuizFrame = ({ ...props }) => {

    const loadContext = useContext(LoadContext);

    return (!loadContext.isLoading ?
        <iframe
            className="quiz__frame"
            src={props.url}
            title="quiz-frame"
            onLoadStart={() => loadContext.setLoading(true)}
            onLoad={el => {
                loadContext.setLoading(false);
                el.currentTarget.height = 550 + "px";
            }}
        />
        :
        <LoadingSpinner/>
    )
};

const CodeElement = ({ ...props }) => {
    return (
        <SyntaxHighlighter
            className="code-highlighter"
            language="java"
            style={dark}
            showLineNumbers={true}
            customStyle={{ border: 'none', background: '#1e2023', fontSize: '12px' }}
        >
            {props.content}
        </SyntaxHighlighter>
    )
};
