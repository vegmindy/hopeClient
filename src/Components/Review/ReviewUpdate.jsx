// import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
// import TokenContext from '../../Contexts/TokenContext'
// import APIURL from '../../helpers/environment'

// const ReviewEdit = (props) => {
//     let tokenContext = React.useContext(TokenContext);

//     const [editRating, setEditRating] = useState(props.location.state.userRating);
//     const [editReview, setEditReview] = useState(props.location.state.userReview);

//     const reviewUpdate = (event, review) => {
//         event.preventDefault();
//         fetch(`${APIURL}/review/update${props.reviewToUpdate.id}`,{
//             method: 'PUT',
//             body: JSON.stringify({update: {rating: editRating, review: editReview}}),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': TokenContext.token
//             })
//         }) .then((res) => {
//             props.fetchReviews();
//             props.updateOff();
//         })
//     }
//     return(
//         <Modal isOpen={true}>
//             <ModalHeader>Edit a Review</ModalHeader>
//             <ModalBody>
//                 <Form onSubmit={reviewUpdate}>
//                     <FormGroup>
//                         <Label htmlFor="rating">Edit Rating:</Label>
//                         <Input name="rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor="review">Edit Review:</Label>
//                         <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
//                     </FormGroup>
//                     <Button type="submit">Update Review</Button>
//                 </Form>
//             </ModalBody>
//         </Modal>
//     )
// }


// export default ReviewEdit;



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


import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext'
import APIURL from '../../helpers/environment'

const ReviewEdit = (props) => {
    let tokenContext = React.useContext(TokenContext);

    const [editRating, setEditRating] = useState(props.location.state.userRating);
    const [editReview, setEditReview] = useState(props.location.state.userReview);

    const reviewUpdate = (e, review) => {
        e.preventDefault();
        fetch(`${APIURL}/review/updatereview${props.reviewID}`,{
            method: 'PUT',
            body: JSON.stringify({update: {rating: editRating, review: editReview}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': tokenContext.token
            })
        }) .then((res) => {
            props.fetchReviews();
            props.updateOff();
        })
    }
    return(
        <h1>Hello</h1>
        // <Modal isOpen={true}>
        //     <ModalHeader>Edit a Review</ModalHeader>
        //     <ModalBody>
        //         <Form onSubmit={reviewUpdate}>
        //             <FormGroup>
        //                 <Label htmlFor="rating">Edit Rating:</Label>
        //                 <Input name="rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}/>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlFor="review">Edit Review:</Label>
        //                 <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
        //             </FormGroup>
        //             <Button type="submit">Update Review</Button>
        //         </Form>
        //     </ModalBody>
        // </Modal>
        // <Container>
        //     <h1>Edit Review for {props.location.state.gameName}</h1>
        //     <Form onSubmit={reviewUpdate}>
        //         <FormGroup>
        //             <Label htmlFor="rating">Edit Rating:</Label>
        //             <Input type="select" name="rating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}>
        //                 <option>1</option>
        //                 <option>2</option>
        //                 <option>3</option>
        //                 <option>4</option>
        //                 <option>5</option>
        //             </Input>
        //         </FormGroup>
        //         <FormGroup>
        //             <Label htmlFor="review">Edit Review:</Label>
        //             <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
        //         </FormGroup>
        //         <Button type="submit" color="dark">Submit</Button>
        //     </Form>
        // </Container>
    )
}


export default ReviewEdit;