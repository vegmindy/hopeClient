import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const UpdateLink = (props) => {

    return (
            <div className="justify-content-center mx-auto">
                <Link to={{
                    pathname: '/review/update',
                    state: {
                        review: props.reviewID
                    }
                }}><Button>Update</Button></Link>
            </div>
    )
}

export default UpdateLink;