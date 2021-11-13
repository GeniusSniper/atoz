import React from "react";
import { Link, Redirect } from "react-router-dom";
import ItemReviewsContainer from "../review/item_reviews_container";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      qty: 1,
    };

    this.adding_to_cart = this.adding_to_cart.bind(this);
  }

  componentDidMount() {
    this.props.needItem(this.props.match.params.itemId);
  }

  adding_to_cart() {
    if (this.props.user) {
      if (this.props.user.cart[this.props.itemId]) {
        this.props.user.cart[this.props.itemId].qty =
          parseInt(this.state.qty) +
          parseInt(this.props.user.cart[this.props.itemId].qty);
      } else {
        this.props.item.qty = parseInt(this.state.qty);
        this.props.user.cart[this.props.itemId] = this.props.item;
      }
      this.props.addingToCart(this.props.user.cart);
    } else {
      if (this.props.cart[this.props.itemId]) {
        this.props.cart[this.props.itemId].qty =
          parseInt(this.state.qty) +
          parseInt(this.props.cart[this.props.itemId].qty);
      } else {
        this.props.item.qty = parseInt(this.state.qty);
        this.props.cart[this.props.itemId] = this.props.item;
      }
      localStorage.setItem("cart", JSON.stringify(this.props.cart));
    }
    window.location.replace("/#/cart");
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  render() {
    const item = this.props.item;
    if (!item.id) return null;
    document.title = this.props.item.item_name;
    const itemimgs = item.image_url.map((img, j) => (
      <div className="itemImgsGrid" key={img}>
        <div className="itemImgBlock">
          <img
            src={img}
            alt="broke"
            className="itemimg"
            onMouseOver={() => this.setState({ i: j })}
          />
        </div>
      </div>
    ));
    const allReviews = this.props.reviews.map((review) => {
      if (!review) return null;
      return (
        <ItemReviewsContainer
          review={review}
          key={Math.random()}
          itemId={item.id}
        />
      );
    });

    return (
      <div className="eachItem">
        <div className="eachItemFlex">
          <div className="leftSession">
            <div className="itemimgs">{itemimgs}</div>
            <div className="eachItemMainImg">
              <img
                src={`${item.image_url[this.state.i]}`}
                alt="imgs"
                className="eachImgPit"
              />
            </div>
          </div>
          <div className="midSession">
            <div className="midSessionBox">
              <div className="midSessionFlex">
                <h1 className="eachItemTitle">{item.item_name}</h1>
                <div className="lineBreak"></div>
                <p className="eachItemPrice price">
                  Price: ${priceToS("" + item.item_price)}
                </p>
                <div className="itemAbout">About this Item</div>
                <div className="itemDescrption">{item.descrption}</div>
              </div>
            </div>
          </div>
          <div className="rightSession">
            <div className="rightSessionBox">
              <div className="rightSessionFlex">
                <div className="eachItemPrice">
                  Buy Now:
                  <div className="price">${priceToS("" + item.item_price)}</div>
                </div>
                {/* <p>numbers of item left: {item.num_of_item_left}</p> */}
                <div className="dropdowns">
                  <label>Qty:</label>
                  <select className="itemQtyDropdown">
                    {/* <option style={{display: 'none'}} selected>
                      Qty: {this.state.qty}
                    </option> */}
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 1 });
                      }}
                    >
                      1
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 2 });
                      }}
                    >
                      2
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 3 });
                      }}
                    >
                      3
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 4 });
                      }}
                    >
                      4
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 5 });
                      }}
                    >
                      5
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 6 });
                      }}
                    >
                      6
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 7 });
                      }}
                    >
                      7
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 8 });
                      }}
                    >
                      8
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 9 });
                      }}
                    >
                      9
                    </option>
                    <option
                      className="itemQtyDropdownOption"
                      onClick={() => {
                        this.setState({ qty: 10 });
                      }}
                    >
                      10
                    </option>
                  </select>
                </div>
                <button className="addCartButton" onClick={this.adding_to_cart}>
                  Add to Cart
                </button>
                <br />
                <Link to={"/checkout"} className="buyNowButton">
                  <button className="purchaseButton">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lineBreak"></div>
        <div className="reviewSession">
          <div className="requstingReview">
            <h1 className="reviewThisProduct">Review this product</h1>
            <p className="shareYourThoughts">
              Share your thoughts with other customers
            </p>
            <Link
              to={`/items/${item.id}/review/new`}
              className="creatingReview"
            >
              <button className="createReviewButton">
                Write a customer review
              </button>
            </Link>
          </div>
          <div className="allReviews">{allReviews}</div>
        </div>
      </div>
    );
  }
}

let priceToS = (num) => {
  let str = "";
  let arr = num.split(".");
  for (let i = 0; i < arr[0].length; i++) {
    if ((arr[0].length - i) % 3 === 0 && i !== 0) {
      str += "," + arr[0][i];
    } else {
      str += arr[0][i];
    }
  }
  str += "." + arr[1];
  return str;
};

export default Item;
