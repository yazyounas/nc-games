import { useState } from "react";
import { updatesVoteByID } from "./api";

function LikeSection({ review_id, votes }) {
  const [showButton, setShowButton] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [err, setErr] = useState(" ");

  const handleLike = () => {
    setClicked(true);
    setCurrentVotes((currentVotes) => currentVotes + 1);
    setErr(null);
    updatesVoteByID(review_id)
      .then(() => {
        setShowButton(false);
      })
      .catch((err) => {
        setErr(
          "Failed to update vote count. Please check your internet connection and try again later"
        );
      });
  };
  return (
    <div>
      <p>{currentVotes}</p>
      {showButton ? (
        <button onClick={handleLike} disabled={clicked}>
          Likes
        </button>
      ) : (
        <p>Thanks for voting!</p>
      )}
      {err ? <p>{err}</p> : null}
    </div>
  );
}

export default LikeSection;
