export const selectReview = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReview(state).entities[reviewId];
