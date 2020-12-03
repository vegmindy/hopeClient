import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext';
import APIURL from '../../helpers/environment'
import { Link } from 'react-router-dom';

const ReviewEdit = (props) => {
    let token = React.useContext(TokenContext)
    
    // props.location.state.
    const [editRating, setEditRating] = useState(props.location.state.userRating);
    const [editReview, setEditReview] = useState(props.location.state.userReview);
    const [submitSuccess, setSubmitSucess] = useState(false)

    function reviewUpdate(event) {
        event.preventDefault();
        let jsonBody = {
            userReview : editReview,
            userRating : editRating
        }
        
        fetch(`${APIURL}/review/updatereview/${props.location.state.reviewID}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json",
                "Authorization": token.token
            },
            body: JSON.stringify(jsonBody)
        }) 
        .then((res) => res.json())
        .then(data=>setSubmitSucess(true))
    }
    return(
        // <Modal isOpen={true}>
        //     <ModalHeader>Edit a Review</ModalHeader>
        //     <ModalBody>
        <Container className="container">
            <p>Update a review for {props.location.state.gameTitle}</p>
            <Form onSubmit={reviewUpdate}>
                <FormGroup>
                    <Label htmlFor="rating">Edit rating:</Label>
                    <Input type="select" id="userRating" value={editRating} onChange={(e)=> setEditRating(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="review">Edit Review:</Label>
                    <Input id="userReview" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Update Review</Button>
            </Form>
            <Modal isOpen={submitSuccess}>
            <ModalHeader>Success!</ModalHeader>
            <ModalBody>
                <p>You successfully update a review!</p>
                <Link to="/review/all" style={{color: 'white'}}>
                <Button color="dark"><Link to="/review/all" style={{color: 'white'}}>Return to Search</Link></Button>  
                </Link>
            </ModalBody>
            </Modal>
        </Container>
        
        //     </ModalBody>
        // </Modal>
    )
}


export default ReviewEdit;