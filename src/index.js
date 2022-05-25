import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Welcome(props) {
  return (<h1> hello {props.name} </h1>);
}

function App() {
  return (
    <div>
      <Welcome name="fengwei" />
      <Welcome name="fengdong" />
      <Welcome name="yxc" />
    </div>
  );
}

root.render(<App />)