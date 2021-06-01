export const ActionType = {
  SAVE_REVIEW: `reviews/saveReview`
};

export const ActionCreator = {
  saveReview: (review) => ({
    type: ActionType.SAVE_REVIEW,
    payload: review
  })
};