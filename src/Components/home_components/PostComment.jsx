import { useState } from "react";
import { postComment } from "./api";


function PostComment({ review_id, setComments }) {
  const [body, setBody] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      body: body,
      author: user ? user.username : "Anonymous",
    };

    setClicked(true);
    postComment(review_id, newComment)
      .then((addComment) => {
        setComments((prevComments) => [addComment, ...prevComments]);
        setError(null);
        setMessage("Comment posted successfully!");
        setBody("");
        setClicked(false);
      })
      .catch((error) => {
        setError("Error posting comment. Please try again later.");
        setClicked(false);
      });
  };

  const handleLogin = () => {
    setUser({ username: "jessjelly" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main className="post-comment-container">
      <h3>Post a Comment</h3>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="form-group">
          <label htmlFor="body">Comment:</label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Username:</label>
          {user ? (
            <>
              <span>{user.username}</span>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
        <button type="submit" className="submit-button" disabled={clicked}>
          {clicked ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </main>
  );
}
export default PostComment;
