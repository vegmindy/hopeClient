import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, CloseButton, Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext';
import APIURL from '../../helpers/environment'
import { Link } from 'react-router-dom';


const deleteReview = (props) => {
    // let reviewID= props.location.state.reviewID
    let jsonBody = {
        id: props.location.state.reviewID
    }
    function deleteUserReview(e){
        e.preventDefault();
    fetch(`${APIURL}/review/delete/`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': props.token
        }, 
        body: JSON.stringify(jsonBody)
    })
    .then((res) => res.json)
    }

    
    

        return (
            <div>
                <Modal isOpen={true}>
                <ModalHeader>Are you sure you'd like to delete?</ModalHeader>
                {/* <ModalHeader closeButton>
                    <Modal.Title>Are you sure you'd like to delete?</Modal.Title>
                </ModalHeader> */}
                <ModalBody>
                    <p>Are you sure you want to delete the entry for {props.location.state.gameTitle}? If yes, click delete. If no, click return to Reviews</p>
                    <Link to="/review/all" style={{color: 'white'}}>
                    <Button color="dark"><Link to="/review/all" style={{color: 'white'}}>Return to my reviews</Link></Button>  
                    </Link>
                    <Button color="dark" onClick={deleteUserReview}>Delete</Button>
                </ModalBody>
                </Modal>
            </div>
        )
    } 
    
    export default deleteReview;