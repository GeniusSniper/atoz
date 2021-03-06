import React from "react";
import { Link } from "react-router-dom";

class Items extends React.Component {
  componentDidMount() {
    this.props.allItems();
    document.title = "Atoz";
  }

  render() {
    const allItem = (
      <div className="allItems">
        <ul className="grid-items">
          {this.props.items.map((item) => (
            <div key={item.id} className="gridItem">
              <Link to={`items/${item.id}`} className="gridItemLink">
                <div className="gridContent">
                  <div className="gridImgBox">
                    <div
                      style={{
                        display: "block",
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={`${item.image_url[0]}`}
                        alt="img_of_each_item"
                        className="gridItemImg"
                      />
                    </div>
                  </div>
                  <div className="itemTitle">{itemName(item.item_name)}</div>
                  <div className="gridItemPrice">
                    ${priceToS(item.item_price)}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
    return (
      <div className="homePage">
        {/* <div className='zIndex'> */}
        <div className="mainPageImgBox">
          <img
            src="https://atoz-seeds.s3.us-east-2.amazonaws.com/homeBackground.jpg"
            alt="main page"
            className="mainPageImg"
          />
        </div>
        {/* </div> */}
        <div className="mainPageSession">{allItem}</div>
      </div>
    );
  }
}

export default Items;

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
  str += "." + arr[1].substring(0, 2);
  return str;
};

let itemName = (name) => {
  return name.length > 30 ? name.slice(0, 30) + "..." : name;
};
