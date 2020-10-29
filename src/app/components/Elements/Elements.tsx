import Interweave from "interweave";
import React, {Fragment, useContext, useEffect, useState} from "react";
import './Elements.scss';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {ErrorContext} from "../../app-common/split-pane/Content";
import {LoadingSpinner} from "../Spinner";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import {IonButton} from "@ionic/react";

export const Elements = ({ ...props }) => {

    function changeText(newValue: any) {
        const oldEl = props.elements.find((el: any) => el === props.el);

        let elements = props.elements;
        let newEl = elements.find((el: any) => el === oldEl);
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

    function changeTable(oldValue: any, newValue: any, rowIdx: number | null, columnIdx: number | null) {
        const oldEl = props.elements.find((el: any) => el.type === "table" && el === props.el);

        let elements = props.elements;
        let newEl = elements.find((el: any) => el.type === "table" && el === oldEl);

        if (rowIdx === null || 0) {
            newEl.content = newValue;
        } else if (columnIdx !== null) {
            newEl.rows[rowIdx].columns[columnIdx].content = newValue;
        }
        props.setElements(elements);
    }

    return (
        <div className="article__element">
            {props.el.type === "title" &&
                <>{props.isEditable ?
                    <h2 contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={event => changeText(event.currentTarget.textContent)}
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
                        onInput={event => changeText(event.currentTarget.textContent)}
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
                       onInput={event => changeText(event.currentTarget.textContent)}
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
                        <div>
                            {props.el.content &&
                                <p contentEditable={true}
                                   suppressContentEditableWarning={true}
                                   onInput={event => changeTable(props.el.content, event.currentTarget.textContent, null, null)}>
                                    <Interweave content={props.el.content}/>
                                </p>
                            }
                            <Table tableElement={props.el} isEditable={true} changeTable={changeTable}/>
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
                <List listElement={props.el} changeList={changeList} isEditable={props.isEditable} ordered={props.el.ordered}/>
            }
            {props.el.type === "code" &&
                <CodeElement content={props.el.content} language={props.el.language}/>
            }
            {props.el.type === "file" &&
                <DownloadFile isEditable={props.isEditable} element={props.el}/>
            }
            {props.el.type === "hint" &&
                <>{props.isEditable ?
                    <p className="hint"
                       contentEditable={true}
                       suppressContentEditableWarning={true}
                       onInput={event => changeText(event.currentTarget.textContent)}
                    >
                        <Interweave content={props.el.content}/>
                    </p>
                    :
                    <p className="hint"><Interweave content={props.el.content}/></p>
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
            DataService.getImage(props.url)
                .then(async data => {
                    const dataStrings = data.map((el: any) => el.data);
                    const image = "data:image/png;base64," + dataStrings.join('');
                    await setImage(image)
                })
                .catch(err => errorContext.setMessage(err))
                .finally(() => loadContext.setLoading(false))
        }
    }, [props.url]);

    return image === null && loadContext.isLoading ?
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
    return (props.ordered ?
        <ol>
            {props.isEditable ?
                <p className='tkn-list-header'
                   contentEditable={true}
                   suppressContentEditableWarning={true}
                   onInput={event => props.changeList(props.listElement.content, event.currentTarget.textContent, null)}
                >
                    <Interweave content={props.listElement.content}/>
                </p>
                :
                <p className='tkn-list-header'><Interweave content={props.listElement.content}/></p>
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
        </ol>
        :
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
            {props.isEditable ?
                <tbody>
                    <TableBody tableElement={props.tableElement} changeTable={props.changeTable} isEditable={true} />
                </tbody>
                :
                <tbody>
                    <TableBody tableElement={props.tableElement}/>
                </tbody>
            }
        </table>
    )
};

const TableBody = ({ ...props }) => {
    return props.tableElement.rows.map((row: any, rowIdx: number) =>
        <tr key={rowIdx} className={"row" + rowIdx}>
            {row.columns.map((column: any, columnIdx: number) =>
                props.isEditable ?
                    <Fragment key={columnIdx}>
                        {row.type === "header" ?
                            column.colSpan ?
                                <th className={`col${columnIdx} ${column.align} colSpan`}
                                    colSpan={column.colSpan}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={event => props.changeTable(column.content, event.currentTarget.textContent, rowIdx, columnIdx)}
                                >
                                    <Interweave content={column.content}/>
                                </th>
                                :
                                <th className={`col${columnIdx} ${column.align}`}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={event => props.changeTable(column.content, event.currentTarget.textContent, rowIdx, columnIdx)}
                                >
                                    <Interweave content={column.content}/>
                                </th>
                            :
                            column.colSpan ?
                                <td className={`col${columnIdx} ${column.align} colSpan`}
                                    colSpan={column.colSpan}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={event => props.changeTable(column.content, event.currentTarget.textContent, rowIdx, columnIdx)}
                                >
                                    <Interweave content={column.content}/>
                                </td>
                                :
                                <td className={`col${columnIdx} ${column.align}`}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={event => props.changeTable(column.content, event.currentTarget.textContent, rowIdx, columnIdx)}
                                >
                                    <Interweave content={column.content}/>
                                </td>
                        }
                    </Fragment>
                    :
                    <Fragment key={columnIdx}>
                        {row.type === "header" ?
                            column.colSpan ?
                                <th colSpan={column.colSpan} className={`col${columnIdx} ${column.align} colSpan`}>
                                    <Interweave content={column.content}/>
                                </th>
                                :
                                column.rowSpan ?
                                    <th rowSpan={column.rowSpan} className={`col${columnIdx} ${column.align}`}>
                                        <Interweave content={column.content}/>
                                    </th>
                                    :
                                    <th className={`col${columnIdx} ${column.align}`}>
                                        <Interweave content={column.content}/>
                                    </th>
                            :
                            column.colSpan ?
                                <td colSpan={column.colSpan} className={`col${columnIdx} ${column.align} colSpan`}>
                                    <Interweave content={column.content}/>
                                </td>
                                :
                                column.rowSpan ?
                                    <td rowSpan={column.rowSpan} className={`col${columnIdx} ${column.align}`}>
                                        <Interweave content={column.content}/>
                                    </td>
                                    :
                                    <td className={`col${columnIdx} ${column.align}`}>
                                        <Interweave content={column.content}/>
                                    </td>
                        }
                    </Fragment>
            )}
        </tr>
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
    const customStyling =
        props.language === "java" ||
        props.language === "javascript" ||
        props.language === "php" ||
        props.language === "sql";
    return (
        <div className={props.language}>
            <SyntaxHighlighter language={props.language}
                               style={dark}
                               useInlineStyles={customStyling ? false : true}
                               className={"code-highlighter"}
                               customStyle={{ border: 'none', background: '#1e2023', fontSize: '12px' }}
                               children={props.content}
            />
        </div>
    )
};

const DownloadFile = ({ ...props }) => {
    return (
        props.isEditable ?
            <div className="download-container">
                <form className="mt-4" encType="multipart/form-data" onSubmit={(event: any) => {
                    event.preventDefault();
                    console.log(event);
                    console.log(event.target[0].files[0]);
                    // TODO: upload file to database (properties needed: fileType, fileName)
                }}>
                    <div className="image-picker form-group">
                        <input
                            type="file"
                            name="file"
                            id="input-files"
                            className="form-control-file border"
                        />
                    </div>
                    <IonButton fill="outline" type="submit">
                        Hochladen
                    </IonButton>
                </form>
            </div>
            :
            <a className="file-container" href={props.element.object.fileLink} target="_blank" rel="noopener noreferrer">
                <FileTypeIcon fileType={props.element.object.fileType} fileName={props.element.object.fileName}/>
                <p className="file-label">{props.element.object.fileName}</p>
                <p className="file-size">{props.element.object.fileSize}</p>
            </a>
    )
};

const FileTypeIcon = ({ ...props }) => {

    const type = props.fileType.split('/')[1] || props.fileName.split('.')[1];

    return (
        <>
            {type === "pdf" && <p className="file-type">PDF</p>}
            {type === "doc" && <p className="file-type">DOC</p>}
            {type === "png" && <p className="file-type">PNG</p>}
            {type === "jpg" && <p className="file-type">JPG</p>}
        </>
    )
};
