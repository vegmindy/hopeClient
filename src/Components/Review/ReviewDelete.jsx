import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Container} from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext';
import APIURL from '../../helpers/environment'
import { Link } from 'react-router-dom';


const deleteReview = (props) => {

    // let token = React.useContext(TokenContext)
        fetch(`${APIURL}/review/${props.location.state.reviewID}`, {
            method: 'DELETE',
            headers:({
                'Content-Type': 'application/json',
                 'Authorization': props.token
            })
        })
        .then((res) => res.json())
    
        return (
            <div>
                <Modal isOpen={true}>
                <ModalHeader>Are you sure you'd like to delete?</ModalHeader>
                <ModalBody>
                    <p>Are you sure you want to delete the entry for {props.location.state.gameTitle}? If yes, click delete. If no, click return to Reviews</p>
                    <Link to="/review/all" style={{color: 'white'}}>
                    <Button color="dark"><Link to="/review/all" style={{color: 'white'}}>Return to my reviews</Link></Button>  
                    </Link>
                    <Link to="/review/all" style={{color: 'white'}}>
                    <Button color="dark" onSubmit={deleteReview}>Delete</Button>  
                    </Link>
                </ModalBody>
                </Modal>
            </div>
        )
    } 
    
    export default deleteReview;