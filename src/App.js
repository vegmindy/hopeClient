import {useState} from 'react';
import Review from "./Components/Review/Review"
import Auth from './Components/Auth/Auth';
import './App.css';
import Search from "./Components/Search/Search"
<<<<<<< HEAD
=======
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import ReviewAdd from './Components/Review/ReviewAdd'
>>>>>>> ae508edd7cf38dff8022a8961a72338803a48045

import * as TokenContext from './Contexts/TokenContext';

import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(localStorage.getItem('sessionToken'));

  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Navbar /> */}
      <Review />
       {/* <Search /> */}
      {viewConductor()}
=======
      <TokenContext.Provider value={{ token: token, setToken: setToken }}> {/* All code goes inside here */}
        <Router> {/* All code goes inside here */}
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Auth} />
          <Route path="/review/add" component={ReviewAdd} />
        </Router>
      </TokenContext.Provider>
>>>>>>> ae508edd7cf38dff8022a8961a72338803a48045
    </div>
  );
}

export default App;
