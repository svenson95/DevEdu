import Interweave from "interweave";
import React, {Fragment, useContext, useEffect, useState} from "react";
import './Elements.scss';

import {fetchImage} from "../../helper/http.service";
import {ErrorContext, LoadContext} from "../split-pane/Content";
import {LoadingSpinner} from "../Spinner";

export const Elements = ({ ...props }) => {
    return (
        <div className="article__element">
            {props.el.type === "title" &&
                <>{props.isEditable ?
                    <h2 contentEditable={true} suppressContentEditableWarning={true}>
                        <Interweave content={props.el.content}/>
                    </h2>
                    :
                    <h2><Interweave content={props.el.content}/></h2>
                }</>
            }
            {props.el.type === "subtitle" &&
                <>{props.isEditable ?
                    <h3 contentEditable={true} suppressContentEditableWarning={true}>
                        <Interweave contentEditable={true} content={props.el.content}/>
                    </h3>
                    :
                    <h3><Interweave content={props.el.content}/></h3>
                }</>
            }
            {props.el.type === "text" &&
                <>{props.isEditable ?
                    <p contentEditable={true} suppressContentEditableWarning={true}><Interweave content={props.el.content}/></p>
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
                <Image path={props.path} setShowImage={props.setShowImage} url={props.el.content} />
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
                <>{props.isEditable ?
                        <div contentEditable={true} suppressContentEditableWarning={true}>
                            <List listElement={props.el}/>
                        </div>
                        :
                        <List listElement={props.el}/>
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
        if (!image && props.url && loadContext.isLoading) {
            loadContext.setLoading(true);
            fetchImage(props.url)
                .then(data => setImage("data:image/png;base64," + data.data))
                .catch(err => errorContext.setMessage(err))
                .finally(() => loadContext.setLoading(false))
        }
    }, []);

    return loadContext.isLoading ?
        <LoadingSpinner/>
        :
        <div onClick={() => image && props.setShowImage(image)}>
            <img alt="post_image" src={image} />
        </div>
};

const List = ({ ...props }) => {
    return (
        <ul>
            <p><Interweave content={props.listElement.content}/></p>
            {props.listElement.list?.map((listItem: any, index: number) =>
                <li key={index}>
                    <Interweave content={listItem.content || listItem}/>
                    {listItem.sublist && <>
                        <ul>
                            {listItem.sublist.map((item: any, index: number) =>
                                <li key={index} className="list__second">
                                    <Interweave content={item}/>
                                </li>
                            )}
                        </ul>
                    </>}
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
