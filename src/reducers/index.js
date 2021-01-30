import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title : 'No scrubs' , duration : '4:05' },
        { title : 'I love u' , duration : '2:43' },
        { title : 'Pretender' , duration : '3:21' },
        { title : 'Knowing me' , duration : '5:54' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});