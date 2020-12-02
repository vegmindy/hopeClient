import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ReviewEdit = (props) => {
    const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);
    const [editReview, setEditReview] = useState(props.reviewToUpdate.review);

    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`http://localhost:4001/log${props.reviewToUpdate.id}`,{
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
//update
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


