import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import './stylesheet/styles.css'
import {Home} from './pages/Home'
import {AddEmployee} from './pages/AddEmployee'
import {EditEmployee} from './pages/EditEmployee'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact/>
        </Switch>
    </GlobalProvider>
  );
}

export default App;
