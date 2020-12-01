import {useState, Component} from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Auth from './Components/Auth/Auth';
import './App.css';
// import Search from './Components/Search/Search'
import APIURL from './helpers/environment';

class Application extends Component {
  state = {
    review:[]
  }
  componentDidMount(){
    fetch(`${APIURL}/review`)
    .then(response => response.json())
    .then(review => this.setState({review}))
  }
}



function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Auth /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
