import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore,applyMiddleware} from 'redux';
// import movies from './reducers/index.js'
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //middleware\
//       console.log("action_type",action.type)
//       next(action);
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  // console.log("action_type",action.type)
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//  if(typeof action=='function'){
//   action(dispatch);
//   return;
//  }
//   next(action);
// }
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
export const StoreContext=createContext();
// console.log(' before STTE',store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
// console.log('After STTE',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('store', store);
class Provider extends React.Component{
  render(){
    const {store}=this.props;
    return(
      <StoreContext.Provider value={store}>{this.props.children}</StoreContext.Provider>
    );
  }
}
root.render(
  <Provider store={store}>
    <App/>
    </Provider>
);

