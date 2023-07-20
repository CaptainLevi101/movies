import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import movies from './reducers/index.js'
const store = createStore(movies);
console.log(' before STTE',store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
console.log('After STTE',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('store', store);

root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

