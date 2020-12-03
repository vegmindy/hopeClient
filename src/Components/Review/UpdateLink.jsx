import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const UpdateLink = (props) => {

    return (
            <div className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/reviewupdate',
                    state: {
                        reviewID: props.reviewID,
                        userRating: props.userRating,
                        gameTitle: props.gameTitle,
                        userReview: props.userReview
                    }
                }}><Button>Update</Button></Link>
            </div>
    )
}

export default UpdateLink;