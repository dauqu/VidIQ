import { combineReducers, configureStore } from '@reduxjs/toolkit';
import video from '../reducers/video';

const rootReducer = combineReducers({
    video: video,
});
const store = configureStore({
    reducer: rootReducer,
});

export default store;
