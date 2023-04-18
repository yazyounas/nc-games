import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, getCommentByReviewId } from "./api";

function IndividualReview() {
  const { review_id } = useParams();
  const [selectReview, setSelectReview] = useState();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((selectReview) => {
      setSelectReview(selectReview);
      setIsLoading(false);
    });
    getCommentByReviewId(review_id).then((comments) => {
      setComments(comments);
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
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.comment_id} className="comment-card">
          <p>{comment.body}</p>
          <p>By {comment.author}</p>
          <p>Votes{comment.votes}</p>
          <p>Date {new Date(comment.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default IndividualReview;
