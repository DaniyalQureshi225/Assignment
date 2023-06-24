import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import HomeReducer from '../Reducer/HomeReducer';

const rootReducer = HomeReducer;
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistReduce = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistReduce, {}, applyMiddleware(thunk));
const persistor = persistStore(Store)

export { Store, persistor }