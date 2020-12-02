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

                }}>Create Review</Link>
                </Button>
        </div >
=======
                }} style={{color: 'white'}}>Create Review</Link>
            </Button>
        </div>
>>>>>>> 446ed4faf59e3839a4147b365799ecfa4b71bb86
    )
}

export default Review;