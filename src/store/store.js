import { createStore } from 'redux';
import reducer from '../modules/app/reducer';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(reducer, devToolsEnhancer({ realtime: true }));

export default store;
