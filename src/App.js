import {useState} from 'react';
import Review from "./Components/Review/Review"
import Auth from './Components/Auth/Auth';
import './App.css';
// import Search from "./Components/Search/Search"



function App() {
  const [token, setToken] = useState(undefined);

  const viewConductor = () => {
    return (token === undefined) ? <Auth updateToken={setToken} /> : <Review token={token}/>;
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
       {/* <Search /> */}
      {viewConductor()}
    </div>
  );
}

export default App;
