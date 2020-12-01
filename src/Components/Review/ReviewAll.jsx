import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Table, } from 'reactstrap';
import TokenContext from "../../Contexts/TokenContext"
import UpdateLink from "./UpdateLink"
import DeleteLink from "./DeleteLink"



const ReviewAll = (props) => {
    let tokenthing = React.useContext(TokenContext)
    let token = tokenthing.token

    const [userReviews, setUserReviews] = useState([])
    // let ownerID = props.user.id

    const updateReview = (e) => {
        return (
            <div>
                <Link to={{
                    pathname: "/review/add",
                    state: {
                        reviewID: e
                    }
                }} />

            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:4000/review/byuser`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            })
            .then(res => res.json())
            .then(data => setUserReviews(data))
        //.then(data => console.log(data))
    }, [])

    return (
        <Container>
            <Table dark hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Game Title</th>
                        <th>Rated</th>
                        <th>Review</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {

                        userReviews.map((review, index) => {
                            return (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{review.gameTitle}</td>
                                    <td>{review.userRating}</td>
                                    <td>{review.userReview}</td>
                                    <td><UpdateLink reviewID = {review.id}/></td>
                                    <td><DeleteLink reviewID = {review.id}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>

    )
}

export default ReviewAll