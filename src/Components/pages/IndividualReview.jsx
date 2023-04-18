import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../home_components/api";

function IndividualReview() {
  const { review_id } = useParams();
  const [selectReview, setSelectReview] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((selectReview) => {
      setSelectReview(selectReview);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="review-container">
        <h1 className="review-header">Review Details</h1>
      <img
        src={selectReview.review_img_url}
        alt={selectReview.review_name}
        className="review-img"
      />

      <div className="review-details">
        <h2>{selectReview.owner}</h2>
        <p>Date {new Date(selectReview.created_at).toLocaleDateString()}</p>
        <p>Category: {selectReview.category}</p>
        <p>{selectReview.review_body}</p>
      </div>
    </div>
  );
}

export default IndividualReview;
