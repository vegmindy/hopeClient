import {useState} from 'react';
import Review from "./Components/Review/Review"
import Auth from './Components/Auth/Auth';
import Favorites from './Components/Favorites/Favorites'
import './App.css';



function App() {
  const [token, setToken] = useState(undefined);

  const viewConductor = () => {
    return (token === undefined) ? <Auth updateToken={setToken} /> : <Favorites token={token}/>;
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
       <Search />
      {viewConductor()}
    </div>
  );
}

export default App;
