import React from 'react';

const QuoteCard = ( { quote, removeQuote, upvoteQuote, downvoteQuote } ) =>
  <div>

      <div class="container">
        <div class="col-md-12">
            <br />
              <blockquote class="text-center" border-left="none">
                <p class="mb-0">{ quote.content }</p>
                <footer>- author <cite title="Source Title">{ quote.author }</cite></footer>
                <br />
                <medium class="text-muted">Votes: { quote.votes }</medium>
                <br />
              </blockquote>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" id="upvote_button" class="btn btn-sm btn-outline-secondary" onClick={() => upvoteQuote(quote.id)}>Upvote</button>
                    <button type="button" id="downvote_button" class="btn btn-sm btn-outline-secondary" onClick={() => downvoteQuote(quote.id)}>Downvote</button>
                    <button type="button" id="remove_vote_button" class="btn btn-sm btn-outline-secondary" onClick={() => removeQuote(quote.id)}>Delete Quote</button>
                  </div>
                </div>
            <br />
        </div>
      </div>
    
  </div>;

export default QuoteCard;
