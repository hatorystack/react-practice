const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

// actions
// action-types
const Add_SUBSCRIBER = 'Add_SUBSCRIBER';
const Add_VIEWCOUNT = 'Add_VIEWCOUNT';

const addSubscriber = () => {
  return {
    type: Add_SUBSCRIBER,
  };
};

const addViewCount = () => {
  return {
    type: Add_VIEWCOUNT,
  };
};

// reducers
const subscriberState = {
  subscribers: 365,
};
const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case Add_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};

const viewState = {
  viewCount: 100,
};

const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case Add_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  view: viewReducer,
  subscriber: subscriberReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe - view - dispatch
// console.log(store.getState());

// store.subscribe(() => {
//   console.log('subscribe ==>>', store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());

// console.log(store.getState());
