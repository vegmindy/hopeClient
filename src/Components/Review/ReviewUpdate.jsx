import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext'
import APIURL from '../../helpers/environment'

const ReviewEdit = (props) => {
    let tokenthing = React.useContext(TokenContext)
    let token = tokenthing.token

    const [editRating, setEditRating] = useState(props.location.state.userRating);
    const [editReview, setEditReview] = useState(props.location.state.userReview);

    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`${APIURL}/review/update${props.reviewToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({log: {rating: editRating, review: editReview}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchReviews();
            props.updateOff();
        })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Review</ModalHeader>
            <ModalBody>
                <Form onSubmit={reviewUpdate}>
                    <FormGroup>
                        <Label htmlFor="rating">Edit Rating:</Label>
                        <Input name="rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="review">Edit Review:</Label>
                        <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update Review</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default ReviewEdit;



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

// const UpdateReview = () =>{

//     return(
//         <div>
//         <p>This is update page</p>
//     </div>
// )
// }
// export default UpdateReview;


