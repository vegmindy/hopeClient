import { useState, useEffect } from "react";
import { Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom';

const Review = (props) => {
    const [reviews, setReviews] = useState([]);

    const toggleReviewModal = () => {

    }

    return (
        <div style={{padding: '10px'}} className="justify-content-center mx-auto">
            <Button color="dark" className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/add',
                    state: {
                        gameId: props.gameId,
                        gameName: props.gameName
                    }
                }} style={{color: 'white'}}>Create Review</Link>
            </Button>
        </div >
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

