import { combineReducers } from 'redux';
import songs from '../api/songs.json';

const songsReducer = () => {
    return songs;
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload.song;
    }

    return selectedSong;
}

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });
