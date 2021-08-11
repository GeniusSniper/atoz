import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToItemShow = this.navigateToItemShow.bind(this);
  }

  navigateToItemShow() {
    this.props.history.push(`/items/${this.props.match.params.itemId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let review;
    if(this.props.formType === 'create'){
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId)
      });
      this.props.createReview(review);
    } else {
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId),
        id: this.props.review.id
      });
      this.props.updateReview(review);
    }
    this.navigateToItemShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="reviewForm">
        <div className='centeredForm'>
          <form onSubmit={this.handleSubmit}>
            <div className='reviewFormTitle'>
              {this.props.formType}&nbsp;review
            </div>
            <div className='reviewFormRating'>
              <p>Rating</p>
              <label>1
                <input type="radio" value={1} onClick={this.update('rating')} className='radioButton' />
              </label>
              <label>2
                <input type="radio" value={2} onClick={this.update('rating')}  className='radioButton'/>
              </label>
              <label>3
                <input type="radio" value={3} onClick={this.update('rating')}  className='radioButton'/>
              </label>
              <label>4
                <input type="radio" value={4} onClick={this.update('rating')}  className='radioButton'/>
              </label>
              <label>5
                <input type="radio" value={5} onClick={this.update('rating')}  className='radioButton'/>
              </label>
            </div>
            <div className='reviewFormComment'>
              <p>Review</p>
              <textarea cols="40" rows="15" value={this.state.body} onChange={this.update("body")} className='textarea' />
            </div>
            <button className='reviewFormButton'>{this.props.formType} review</button>
          </form>
          <button onClick={this.navigateToItemShow}>Cancel</button>
        </div>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
