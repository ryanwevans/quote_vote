import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

// Local state only, used to hold state that will be passed to global state in #handleOnSubmit
  state = {
      content: '',
      author: '',
      votes: 0
    }

// Updates local state as user types into text field; text field's value is set to the value of local state, so text field is updated as the user types.
  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

// Handles form submission and addition of quote to global store (Redux) when user clicks `submit`
  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {...this.state, id: uuid() };
    this.props.addQuote(quote);
    // Reset the local state to empty:
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-6">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-sm btn-outline-secondary" id="add_quote_button">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addQuote })(QuoteForm);
