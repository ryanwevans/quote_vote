// Action creator for adding quotes
export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quote
    };
  };

  // Action creator for removing quotes
export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    };
};

// Action creator for upvoting quotes
export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    };
};

// Action creator for downvoting quotes
export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    };
};
