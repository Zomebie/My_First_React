import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import App2 from'./App2';
import App3 from'./App3';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('calculator'));
/* rendering한 결과 App을 index.html의 root에 뿌림*/
ReactDOM.render(<App2/>,document.getElementById('rank'));

ReactDOM.render(<App3/>,document.getElementById("todolist"));
serviceWorker.unregister();
