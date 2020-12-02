import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const DeleteLink = (props) => {

    return (
            <div className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/delete',
                    state: {
                        reviewID: props.reviewID,
                        userRating: props.userRating,
                        gameTitle: props.gameTitle,
                        userReview: props.userReview
                    }
                }}><Button>Delete</Button></Link>
            </div>
    )
}

export default DeleteLink;