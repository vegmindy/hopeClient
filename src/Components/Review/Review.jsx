import { useState, useEffect } from "react";
import {Button, Table} from 'reactstrap'
import { Link } from 'react-router-dom';

const Review = (props) => {
    const [reviews, setReviews] = useState([]);

    const toggleReviewModal = () => {
        
    }

    return (
            <div className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/add',
                    state: {
                        gameId: props.gameId,
                        gameName: props.gameName
                    }
                }}>Create Review</Link>
            </div>
    )
}

export default Review;