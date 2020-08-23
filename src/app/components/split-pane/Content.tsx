import React, {createContext, useContext, useEffect, useState} from 'react';
import {
    IonPage,
    IonSearchbar,
    IonToast,
} from "@ionic/react";
import './Content.scss';

import Header from "../Header";
import {Router} from "../Router";
import {LoadContext} from "../../../App";
import DataService from "../../services/data.service";
import SearchPost from "../SearchPost";
import {useHistory} from "react-router";

export const ErrorContext = createContext(false as any);
export const SelectedPostContext = createContext(null as any);
export const SearchPostContext = createContext(null as any);

const Content = () => {

    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });
    const [message, setMessage] = useState(false as any);
    const [postId, setPostId] = useState(null as any);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(null as any);
    const [isSearching, setSearching] = useState(false);
    const [isSearching_mobile, setSearching_mobile] = useState(false);
    const [searchText_mobile, setSearchText_mobile] = useState("");
    const loadContext = useContext(LoadContext);
    const history = useHistory();

    useEffect(() => {
        if (searchText !== "") {
            loadContext.setLoading(true);
            DataService.searchPost(searchText)
                .then(data => setSearchResults(data))
                .catch(error => setMessage(error))
                .finally(() => loadContext.setLoading(false))
        }
    }, [searchText]);

    useEffect(() => {
        function getWindowSize() {
            console.log('window');
            setWindowSize({ height: window.innerHeight, width: window.innerWidth });
        }

        if (history.location.pathname === "/my-profile") {
            window.addEventListener('resize', getWindowSize);
        }

        return () => window.removeEventListener('resize', getWindowSize);
    }, [history.location.pathname]);

    useEffect(() => {
        setSearchText(searchText_mobile)
    }, [searchText_mobile]);

    return (
        <IonPage id="main">
            <ErrorContext.Provider value={{ message, setMessage }}>
                <SearchPostContext.Provider value={{ isSearching_mobile, setSearching_mobile }}>
                    <Header windowSize={windowSize}
                            setMessage={setMessage}
                            searchResults={searchResults}
                            setSearchResults={setSearchResults}
                            searchText={searchText}
                            setSearchText={setSearchText}
                            setSearching={setSearching}
                            isSearching_mobile={isSearching_mobile}
                            setSearching_mobile={setSearching_mobile}/>
                    {windowSize.width < 600 && isSearching_mobile &&
                        <IonSearchbar className={isSearching_mobile ? "mobile-searchbar mobile-search-bar--open" : "mobile-searchbar"}
                                       value={searchText_mobile}
                                       showCancelButton="focus"
                                       placeholder="Suchen"
                                       debounce={700}
                                       onIonChange={e => {
                                           setSearchText_mobile(e.detail.value!);
                                           if (e.detail.value!.length) {
                                               setSearching(true);
                                           } else {
                                               setSearchText_mobile("");
                                               setSearchResults(null);
                                               setSearching(false);
                                           }
                                       }}
                                      onClick={() => {
                                          if (searchText_mobile !== "" && searchResults !== null) {
                                              setSearching(true);
                                          }
                                      }}>
                        </IonSearchbar>
                    }
                    <SelectedPostContext.Provider value={{ postId, setPostId }}>
                        {isSearching ?
                            <SearchPost isSearching={isSearching}
                                        setSearching={setSearching}
                                        isSearching_mobile={isSearching_mobile}
                                        setSearching_mobile={setSearching_mobile}
                                        searchResults={searchResults}/>
                            :
                            <Router/>
                        }
                    </SelectedPostContext.Provider>
                </SearchPostContext.Provider>
                {message &&
                    <IonToast
                        cssClass="log__toast"
                        isOpen={message !== false}
                        onDidDismiss={() => setMessage(false)}
                        message={message}
                        duration={2000}
                        mode="ios"
                    />
                }
            </ErrorContext.Provider>
        </IonPage>
    );
};

export default Content;
