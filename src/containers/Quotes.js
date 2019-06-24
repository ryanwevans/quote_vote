import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        {/* Iterate over all quotes, creating and displaying a QuoteCard for each */}
        {quotes.map( quote => <QuoteCard key={quote.id} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} /> )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    quotes: state.quotes }
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
