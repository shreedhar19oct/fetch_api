import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";

function App(){
  return(
    <div className='App'>
      <div className='container'>
        <Card />
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />
,document.getElementById('root'));

export default App