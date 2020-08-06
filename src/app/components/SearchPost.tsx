import React, {useContext} from "react";
import {LoadContext} from "../../App";
import {IonCard, IonContent, IonItem, IonList, IonBadge} from "@ionic/react";
import {LoadingSpinner} from "./Spinner";
import {subjects} from "../../data/menuTitles";
import Interweave from "interweave";

const SearchPost = ({...props}) => {
    const loadContext = useContext(LoadContext);

    function getFullSubjectName(subject: string) {
        return subjects.find(el => el.url === "/" + subject)?.title;
    }

    const nearElements = (elements: any[]) => {
        const foundElement = elements?.find(el => {
            if (!el.content) return ;
            el.content.includes(props.searchText)
        });
        const foundIndex = elements?.indexOf(foundElement);
        if (foundIndex) {
            return {
                previousEl: elements[foundIndex-1],
                element: elements[foundIndex],
                nextEl: elements[foundIndex+1]
            }
        }
    };

    return (
        <IonContent className={props.isSearching_mobile ? "results-content mobile-search-content--open" : "results-content"}>
            <div className="results-container">
                <div className="title-container">
                    {loadContext.isLoading ?
                        <LoadingSpinner/>
                        :
                        <h1>{props.searchResults?.length > 1 || props.searchResults?.length === 0 ?
                            `${props.searchResults?.length} Ergebnisse`
                            :
                            `${props.searchResults?.length} Ergebnis`}
                        </h1>
                    }
                </div>
                <div className="search-results">
                    <IonList className="article__list">
                        {props.searchResults && props.searchResults.map((post: any, index: number) =>
                            <IonCard className="search-element" key={index}>
                                <IonItem lines="none"
                                         routerLink={"/" + post.subject + "/" + post.url}
                                         onClick={() => {
                                             props.setSearching(false);
                                             props.setSearching_mobile(false);
                                         }}>
                                    <div className="search-element-content">
                                        <div className="search-element-header">
                                            <div className="post-details">
                                                <h1>{post.title}</h1>
                                                <h4>{post.description}</h4>
                                            </div>
                                            <IonBadge>{getFullSubjectName(post.subject)}</IonBadge>
                                        </div>
                                        <p><Interweave content={nearElements(post.elements)?.previousEl?.content}/></p>
                                        <p><Interweave content={nearElements(post.elements)?.element?.content}/></p>
                                        <p><Interweave content={nearElements(post.elements)?.nextEl?.content}/></p>
                                    </div>
                                </IonItem>
                            </IonCard>
                        )}
                    </IonList>
                </div>
            </div>
        </IonContent>
    )
};

export default SearchPost;
