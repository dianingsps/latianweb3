import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : "Mulan",
        color : 'Merah',
        img : 'Merah.jpg',
    },
    {
        name : "Belle",
        color : 'Kuning',
        img : 'Kuning.jpg',
    },
    {
        name : "Cinderella",
        color : 'Biru',
        img : 'Biru.jpg',
    },
    {
        name : "Jasmine",
        color : 'Hijau',
        img : 'Hijau.jpg',
    },
    {
        name : "Calculator",
        color : 'Orange',
        img : '',
    },
    {
        name : "Profile",
        color : 'Pink',
        img : '',
    }
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();