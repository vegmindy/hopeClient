import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const DeleteLink = (props) => {

    return (
            <div className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/delete',
                    state: {
                        review: props.reviewID
                    }
                }}><Button>Delete</Button></Link>
            </div>
    )
}

export default DeleteLink;