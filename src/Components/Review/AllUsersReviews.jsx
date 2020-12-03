import APIURL from '../../helpers/environment'
import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button, Table, } from 'reactstrap';
import TokenContext from "../../Contexts/TokenContext"



const AllUsersReview = () =>{
    let token = React.useContext(TokenContext)
    const [userReviews, setUserReviews] = useState([])
    const [userName, setUserName] = useState("")

    useEffect(() =>{
        fetch(`${APIURL}/review/all`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': token.token
            }
        })
        .then(res => res.json())
        .then(data => setUserReviews(data))
    })

    function getUser(id){
        fetch(`${APIURL}/user/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => setUserName(data.firstName + " " + data.lastName))
        // .then(data => console.log(data))
    }


    return(
        <Container className="container">
        <h1> Reviews by all Users!</h1>
        <Table dark hover>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Game Title</th>
                    <th>Rated</th>
                    <th>Review</th>
                    <th>Reviews By</th>
                </tr>
            </thead>

            <tbody>
                {

                    userReviews.map((review, index) => {
                        getUser(review.owner_ID)
                        return (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{review.gameTitle}</td>
                                <td>{review.userRating}</td>
                                <td>{review.userReview}</td>
                                <td>{userName}</td>
                            </tr>
                        )
                    })
                }
                <tr>

                </tr>
            </tbody>
        </Table>
    </Container>
    )
}

export default AllUsersReview;