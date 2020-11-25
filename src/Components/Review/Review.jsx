import { useState, useEffect } from "react";

//914eb4182d2c499cb87ff5c6155012a2 api key
//http example  https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
const Review = () => {

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch("https://localhost:4000/user/addreview", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => setResults(data.results))
    }, [])


    function deletename(){
        //some function
    }



    return (
            results.map((result, index) => {
                return (
                    <div>
                    <p>{result.name}</p>
                    <button ></button>

                    </div>
                    )

            })
    )
}

export default Review;