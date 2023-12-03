import React, { useState } from "react"; 
import { useToken } from "../Token";
import { useUser } from "../User";
import axios from "axios";

const VideoGamesContext = React.createContext();
const URL_VIDEO_GAMES = "http://localhost:4200/videoGame";

function VideoGamesProvider({ children }) { 
    
    const [ videoGames, setVideoGames ] = useState([]);
    const [loadingVideoGame, setLoadingVideoGames] = useState(true);
    const { token } = useToken();
    const { user } = useUser();
    
    const getVideoGames = () => {
        setLoadingVideoGames(true);
        axios.get(URL_VIDEO_GAMES)
        .then(response => {
            setVideoGames(response.data);
            setLoadingVideoGames(false);
        }) 
        .catch(error => {
            console.error(error);
        }) 
    };

    const createVideoGames = () => {};

    const deleteVideoGames = () => {};

    const auth = { getVideoGames, createVideoGames, deleteVideoGames, videoGames, setVideoGames, loadingVideoGame }

    return( <VideoGamesContext.Provider value={auth}> {children} </VideoGamesContext.Provider> )

}

function useVideoGames() {

    const auth = React.useContext(VideoGamesContext);

    return auth;
    
} 

export {

    VideoGamesProvider, 
    useVideoGames 

};