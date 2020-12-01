import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Container, Button } from 'reactstrap';
import TokenContext from '../../Contexts/TokenContext';

const ReviewAdd = (props) => {
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(1);

    let tokenContext = React.useContext(TokenContext);

    if (props.location.state === undefined) {
        return <Redirect to="/search" />;
    }

    function addReview(e) {
        e.preventDefault();

        let bodyObj = { //gameId, userReview, userRating
            gameId: props.location.state.gameId,
            userReview: reviewText,
            userRating: reviewRating
        }


        fetch('http://localhost:4001/review/addreview', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Authorization': tokenContext.token
            },
            body: JSON.stringify(bodyObj)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(reviewText, reviewRating);
        console.log('Hi you added a review')
    }

    //{props.location.state.gameId}
    return (
        <div>
            <Container>
                <p>Add a review for {props.location.state.gameName}</p>
                <Form onSubmit={addReview}>
                    <FormGroup>
                        <Label for="reviewText">Review</Label>
                        <Input type="textarea" name="review" id="reviewText" placeholder="Leave a review here..." onChange={(e) => {
                            setReviewText(e.target.value);
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="reviewRating">Rating</Label>
                        <Input type="select" name="rating" id="reviewRating" onChange={(e) => {
                            setReviewRating(e.target.value);
                        }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="dark">Submit</Button>
                </Form>
            </Container>
        </div>
    );
}

export default ReviewAdd;