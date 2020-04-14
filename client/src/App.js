import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//components
import Chat from './components/Chat/Chat'
import Login from './components/Login/Login'


const App = () => (
    <Router>
        <Route path="/" exact component={Login}></Route>
        <Route path="/chat" exact component={Chat}></Route>
    </Router>
)

export default App