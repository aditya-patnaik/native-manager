import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyAxBCFk0LI9SFitHX5K45Ru7rPa0bDOBMQ",
		  	authDomain: "manager-40023.firebaseapp.com",
		  	databaseURL: "https://manager-40023.firebaseio.com",
		  	storageBucket: "manager-40023.appspot.com",
		  	messagingSenderId: "464619193668"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;