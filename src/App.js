import React from "react";
import "./style.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function App() {
  let counter=7;
  
  return (
    <div className="items">
      {/* <h1>Hello StackBlitz!</h1> */}
      <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            {/* <div className="counter">2</div> */}
            {counter > 0 && <span className="counter">{counter}</span>}
          </div>
      <div className="item">
            <ShoppingCartIcon className="icon" />
            {/* <div className="counter">{counter}</div> */}
            {counter > 0 && <span className="counter">{counter}</span>}
          </div>
    </div>
  );
}   
 