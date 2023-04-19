import { useState } from "react";
import { updatesVoteByID } from "./api";

function VoteButton({ review_id, votes }) {
  const [showButton, setShowButton] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [err, setErr] = useState(' ')
  const handleLike = () => {
    updatesVoteByID(review_id, "up").then(() => {
      setShowButton(false);
      setClicked(true);
      setCurrentVotes(votes + 1)
      
    })
    .catch((err) =>{
      setErr("Failed to update vote count. Please check your internet connection and try again later")
    })
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
      {err? <p>{err}</p> : null}
    </div>
  );
}

export default VoteButton;
