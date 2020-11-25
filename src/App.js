import {useState} from 'react';
// import Navbar from './Components/Navbar/Navbar';
import Auth from './Components/Auth/Auth';
import Favorites from './Components/Favorites/Favorites'
import './App.css';
// import Search from './Components/Search/Search'



function App() {
  const [token, setToken] = useState(undefined);

  const viewConductor = () => {
    return (token === undefined) ? <Auth updateToken={setToken} /> : <Favorites token={token}/>;
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
