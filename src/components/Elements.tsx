import Interweave from "interweave";
import React, {Fragment} from "react";

export const Elements = ({ ...props }) =>
    <div className="article__element">
        {props.el.type === "title" && <h2><Interweave content={props.el.content} /></h2>}
        {props.el.type === "subtitle" && <h3><Interweave content={props.el.content} /></h3>}
        {props.el.type === "text" && <p><Interweave content={props.el.content}/></p>}
        {props.el.type === "line" && <Interweave content={props.el.content}/>}
        {props.el.type === "quiz" && <iframe src={props.el.content} title="quiz-frame"/>
        }
        {props.el.type === "image" && (
            <div onClick={() => props.setShowImage(props.el.content)} >
                <img alt="post_image" src={props.el.content} className="element__image" />
            </div>
        )}
        {props.el.type === "table" &&
        <div className="table__wrapper">
            <table className="inline">
                <tbody>
                {props.el.rows.map((row: any, index: number) =>
                    <tr key={index} className={"row" + index}>
                        {row.columns.map((column: any, index: number) =>
                            <Fragment key={index}>
                                {row.type === "header" ?
                                    <th className={`col${index} ${column.align}`}>
                                        <Interweave content={column.content}/>
                                    </th>
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
        </div>
        }
        {props.el.type === "list" &&
        <ul>
            <p><Interweave content={props.el.content} /></p>
            {props.el.list?.map((listItem: any, index: number) =>
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
        }
    </div>;
