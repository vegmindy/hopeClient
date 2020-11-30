import {useState, useEffect} from 'react';
import SearchResults from './SearchResults/SearchResults';

//914eb4182d2c499cb87ff5c6155012a2 api key
//http example  https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
const Search = () => {

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch("https://api.rawg.io/api/games?914eb4182d2c499cb87ff5c6155012a2", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => setResults(data.results))
    }, [])

    return (
            results.map((result, index) => {
                return (
                    <div>
                    <p>{result.name}</p>
                    </div>
                    )

            })
    )
}

export default Search;