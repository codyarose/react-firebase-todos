import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'

import rootReducer from './reducers'
import firebase from '../firebase'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
}

const composeEnhancers =
	process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
}
export default store
