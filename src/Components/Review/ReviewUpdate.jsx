//update
const editReview = (review) => {
    setReviewToUpdate(review);
    console.log(review);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false)
}

const UpdateReview = () =>{

    return(
        <div>
        <p>This is update page</p>
    </div>
)
}
export default UpdateReview;