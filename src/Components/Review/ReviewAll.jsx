import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Table, } from 'reactstrap';

const ReviewAll = (props) => {

    console.log(props)

    const [userReviews, setUserReviews] = useState([])
    let ownerID = props.user.id

    useEffect(() => {
        fetch(`http://localhost:4000/review/byuser/${ownerID}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res => res.json())
            .then(data => setUserReviews(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <Table dark hover>
                <tr>

                    <tHead>
                        <th>#</th>
                        <th>Game Title</th>
                        <th>Rated</th>
                        <th>Review</th>
                        <th></th>
                        <th></th>
                    </tHead>
                </tr>
                <tBody>

                    {
                        userReviews.map((review, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{review.gametitle}</td>
                                    <td>{review.userRating}</td>
                                    <td>{review.userReview}</td>

                                </tr>


                            )
                        })
                    }
                </tBody>
            </Table>
        </Container>

    )
}

export default ReviewAll