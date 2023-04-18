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
