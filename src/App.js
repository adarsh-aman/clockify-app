import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router';
import {Switch, BrowserRouter as Router} from 'react-router-dom';


import Dashboard from  './Components/Dashboard';

function App() {
  return (
    <Dashboard/>
    
  );
}

export default App;
