import { useState, useEffect } from "react";

//914eb4182d2c499cb87ff5c6155012a2 api key
//http example  https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
const Review = () => {

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch("https://localhost:4000/user/getall", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => setResults(data))
    }, [])


    return (
            results.map((result, index) => {
                return (
                    <div>
                    <p>{result}</p>
                    <button ></button>

                    </div>
                    )

            })
    )
}

export default Review;


// // delete
// const deleteReview = (review) => {
//     fetch(`https://localhost:4000/review/${review.id}`, {
//         method: 'DELETE',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': review.token
//         })
//     })
//     .then(() => review.fetchReviews)
// } 


// //update
// const editReview = (review) => {
//     setReviewToUpdate(review);
//     console.log(review);
// }

// const updateOn = () => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false)
// }

