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
<<<<<<< HEAD
                }} style={{color: 'white'}}>Create Review</Link>
            </Button>
        </div>
=======
                    }}>Create Review</Link>
                </Button>
        </div >

>>>>>>> cb2cf3e1f022817c8cdd2bc32e6a126f0b80baaf
    )
}

export default Review;