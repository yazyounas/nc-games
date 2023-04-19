function Footer() {
//     return (
//         <>
//         import { useState } from "react";
// import { updatesVoteByID } from "./api";

// function VoteButton({ review_id, votes }) {
//   const [likeButton, setLikeButton] = useState(true);
//   const [votesCount, setVotesCount] = useState(votes);

//   const handleLike = () => {
//     updatesVoteByID(review_id, "up").then(() => {
//       setLikeButton(false);
//       setVotesCount(votesCount + 1);
//     });
//   };
//   const handleDislike = () => {
//     updatesVoteByID(review_id, "down").then(() => {
//       setLikeButton(true);
//       setVotesCount(votesCount - 1);
//     });
//   };
//   const renderButton = () => {
//     if (likeButton) {
//       return <button onClick={handleLike}>like</button>;
//     } else {
//       return <button onClick={handleDislike}>dislike</button>;
//     }
//   };
//   return (
//     <div>
//       {votesCount} 
//       {renderButton()}
//     </div>
//   );
// }
//         </>
//     )
}

export default Footer