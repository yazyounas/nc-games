import axios from "axios";

const gameAPI = axios.create({
  baseURL: "https://my-game-app.onrender.com/api",
});

export const getReviews = () => {
  return gameAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return gameAPI.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getCommentByReviewId = (review_id) => {
  return gameAPI.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updatesVoteByID = (review_id, newVotesCount) => {
  return gameAPI
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })

    .then(({ data }) => {
      return data.review;
    });
};

export const postComment = (review_id, commentData) => {
  return gameAPI
    .post(`/reviews/${review_id}/comments`, commentData)

    .then(({ data }) => {
      return data.comment;
    });
};
