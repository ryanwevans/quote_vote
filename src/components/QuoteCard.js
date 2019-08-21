import React from 'react';

const QuoteCard = ( { quote, removeQuote, upvoteQuote, downvoteQuote } ) =>
  <div>

      <div className="container">
        <div className="col-md-12">
            <br />
              <blockquote className="text-center" border-left="none">
                <p className="mb-0">{ quote.content }</p>
                <footer>- author <cite title="Source Title">{ quote.author }</cite></footer>
                <br />
                <span className="text-muted">Votes: { quote.votes }</span>
                <br />
              </blockquote>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" id="upvote_button" className="btn btn-sm btn-outline-secondary" onClick={() => upvoteQuote(quote.id)}>Upvote</button>
                    <button type="button" id="downvote_button" className="btn btn-sm btn-outline-secondary" onClick={() => downvoteQuote(quote.id)}>Downvote</button>
                    <button type="button" id="remove_vote_button" className="btn btn-sm btn-outline-secondary" onClick={() => removeQuote(quote.id)}>Delete Quote</button>
                  </div>
                </div>
            <br />
        </div>
      </div>
    
  </div>;

export default QuoteCard;
