import {Component} from 'react'
import './index.css'

class ReviewsCorousel extends Component {
  state = {activeReviewIndex: 0}

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-containe">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentActiveIndex = reviewsList[activeReviewIndex]
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="buttons-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-images"
            />
          </button>
          {this.renderActiveReview(currentActiveIndex)}
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-images"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCorousel
