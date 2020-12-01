import {useState} from 'react';
import Review from "./Components/Review/Review"
import Auth from './Components/Auth/Auth';
import './App.css';
import Search from "./Components/Search/Search"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import ReviewAdd from './Components/Review/ReviewAdd'
import ReviewAll from "./Components/Review/ReviewAll"
import ReviewUpdate from "./Components/Review/ReviewUpdate"
import ReviewDelete from "./Components/Review/ReviewDelete"

import * as TokenContext from './Contexts/TokenContext';

import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(localStorage.getItem('sessionToken'));

  return (
    <div className="App">
      <TokenContext.Provider value={{ token: token, setToken: setToken }}> {/* All code goes inside here */}
        <Router> {/* All code goes inside here */}
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Auth} />
          <Route path="/review/add" component={ReviewAdd} />
          <Route path="/review/update" component={ReviewUpdate}/>
          <Route path="/review/all" component={ReviewAll}/>
          <Route path="/review/delete" component={ReviewDelete}/>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;