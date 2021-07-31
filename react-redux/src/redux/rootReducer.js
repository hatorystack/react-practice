import { combineReducers } from 'redux';
import subscriberReducer from './subscribers/reducer';
import viewsReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subscriberReducer,
  comments: commentsReducer,
});

export default rootReducer;
