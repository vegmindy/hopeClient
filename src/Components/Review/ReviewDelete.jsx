


const deleteReview = (review) => {
    fetch(`https://localhost:4000/review/${review.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': review.token
        })
    })
    .then(() => review.fetchReviews)

    return (
        <div>
            <p>This is delete page</p>
        </div>
    )
} 

export default deleteReview;