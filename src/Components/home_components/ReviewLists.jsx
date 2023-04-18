import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "./api";

function ReviewLists() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ul className="review-lists-container">
      {reviews.map((review) => (
        <Link
          key={review.review_id}
          to={`/reviews/${review.review_id}`}
          className="review-box"
        >
          <img
            src={review.review_img_url}
            alt={review.review_name}
            className="review-img"
          />
          <div className="review-details">
            <h3>{review.owner}</h3>
            <p>Date {new Date(review.created_at).toLocaleDateString()}</p>
            <p>Category: {review.category}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default ReviewLists;
