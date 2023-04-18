function CommentCard({ comment }) {
    return (
      <div key={comment.comment_id} className="comment-card">
        <p>{comment.body}</p>
        <p>By {comment.author}</p>
        <p>Votes{comment.votes}</p>
        <p>Date {new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
    );
  }

  export default CommentCard;