import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as firebase from 'firebase';

import { getState, getStore } from '../store';

import Navbar from './Navbar';
import HomePage from './HomePage';

import '../sass/main.scss';

// Firebase
firebase.initializeApp({
	apiKey: 'AIzaSyB22-DZ_PvhTJsA-PPf8Vs--fmcCixL-YQ',
	authDomain: 'cerebro-2018-f1052.firebaseapp.com',
	databaseURL: 'https://cerebro-2018-f1052.firebaseio.com',
	projectId: 'cerebro-2018-f1052',
	storageBucket: 'cerebro-2018-f1052.appspot.com',
	messagingSenderId: '1059299836137'
});

const store = getStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<div className="main">
						<Route exact path="/" component={HomePage} />
					</div>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;
