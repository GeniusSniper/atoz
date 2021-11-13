import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.deleteItem = this.deleteItem.bind(this);
    this.updateQty = this.updateQty.bind(this);
  }

  deleteItem(i) {
    this.props.cart[i] = undefined;
    if (this.props.user) {
      this.props.updateCart(this.props.cart);
      localStorage.setItem("cart", JSON.stringify({}));
    } else {
      localStorage.setItem("cart", JSON.stringify(this.props.cart));
      window.location.reload(false);
    }
  }

  updateQty(id, qty) {
    this.props.cart[id].qty = qty;
    if (this.props.user) {
      this.props.updateCart(this.props.cart);
      localStorage.setItem("cart", JSON.stringify({}));
    } else {
      localStorage.setItem("cart", JSON.stringify(this.props.cart));
    }
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  render() {
    // if(!this.props.cart) return null;
    let totalItem = 0,
      totalPrice = 0.0;
    //   let triggerDropdown = () => document.querySelector('.itemQtyDropdown').click();
    let items = Object.values(this.props.cart).map((item) => {
      totalItem += parseInt(item.qty);
      totalPrice += parseFloat(item.item_price) * parseFloat(item.qty);
      return (
        <div key={item.id} className="cartIem">
          <div className="cartEachItem">
            <div className="cartEachItem01">
              <div>
                <Link to={`items/${item.id}`} className="cartEachItemLink">
                  <div className="cartEachItemImgDiv">
                    <img
                      src={`${item.image_url[0]}`}
                      alt="imgs"
                      className="cartItemImg"
                    />
                  </div>
                </Link>
              </div>
              <div className="cartEachItemDetail">
                <Link to={`items/${item.id}`} className="cartEachItemLink">
                  <div>{item.item_name}</div>
                </Link>
                <div className="cartEachItemQt">
                  <div className="dropdowns">
                    {!this.state[item.id] && this.state[item.id] !== 0 ? (
                      <select className="itemQtyDropdown">
                        <option style={{ display: "none" }}>
                          Qty: {item.qty}
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.deleteItem(item.id);
                          }}
                        >
                          0 (Delete)
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 1);
                          }}
                        >
                          1
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 2);
                          }}
                        >
                          2
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 3);
                          }}
                        >
                          3
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 4);
                          }}
                        >
                          4
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 5);
                          }}
                        >
                          5
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 6);
                          }}
                        >
                          6
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 7);
                          }}
                        >
                          7
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 8);
                          }}
                        >
                          8
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => {
                            this.updateQty(item.id, 9);
                          }}
                        >
                          9
                        </option>
                        <option
                          className="itemQtyDropdownOption"
                          onClick={() => this.setState({ [item.id]: item.qty })}
                        >
                          10+
                        </option>
                      </select>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          this.state[item.id] === 0
                            ? this.deleteItem(item.id)
                            : this.updateQty(item.id, this.state[item.id]);
                        }}
                      >
                        <input
                          type="text"
                          value={this.state[item.id]}
                          onChange={(e) => {
                            e.preventDefault();
                            this.setState({
                              [item.id]: parseInt(e.target.value) || 0,
                            });
                          }}
                          className="cartUpdateText"
                        />
                        <button className="cartUpdateButton">Update</button>
                      </form>
                    )}
                    {/* <div
                      className="cartEachItemQt1"
                      onClick={() => {
                        //   console.log(document.querySelector('.itemQtyDropdown'));
                        //   document.querySelector('.itemQtyDropdown').click()
                      }}
                    >
                      <div>Qty: </div>
                      <div>{item.qty}</div>
                      <div>
                        <img
                          src="https://atoz-seeds.s3.us-east-2.amazonaws.com/dropdownButton.png"
                          alt="arrow"
                          className="dropdownButton"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="cartDeleteItem"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </div>
                  {/* <div><button>Delete</button></div> */}
                </div>
              </div>
            </div>
            <div className="cartPrice">${priceToS(item.item_price)}</div>
          </div>
        </div>
      );
    });
    let text = items.length === 0 ? "Your Atoz Cart is empty" : "Shopping Cart";
    let item = this.props.cart.length < 2 ? "item" : "items";
    let total = (
      <h3>
        Subtotal ({totalItem} {item}):{" "}
        <a className="cartPrice">${priceToS("" + totalPrice)}</a>
      </h3>
    );
    return (
      <div className="cartMain" onClick={(e) => {}}>
        <div className="cartShow">
          <div className="cartShoppingCart">
            <div className="cartShoppingList">
              <div className="cartTitle">{text}</div>
              <br />
              <div>{items}</div>
              <div className="checkoutSubTotal">{total}</div>
            </div>
          </div>
          <div>
            <div className="cartCheckout">
              <div>{total}</div>
              <Link to="/checkout">
                <button className="cartCheckoutButton">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let priceToS = (num) => {
  if (num.length < 4) return num;
  let str = "";
  let arr = num.split(".");
  for (let i = 0; i < arr[0].length; i++) {
    if ((arr[0].length - i) % 3 === 0 && i !== 0) {
      str += "," + arr[0][i];
    } else {
      str += arr[0][i];
    }
  }
  if (arr.length === 1) return (str += ".00");
  str += "." + arr[1].substring(0, 2);
  return str;
};

export default Cart;
