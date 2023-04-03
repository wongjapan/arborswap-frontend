import React from "react";
import './footerContact.css'
/* SubscriptionForm */
const SubscriptionForm = () => {
    return (
      <div className="w-full flex subscription">
        <div className="subscription-form" >
            <form onSubmit={(e)=>e.preventDefault()} >
                <input type="text" placeholder="Enter your email" name="search" />
                <button type="button">
                    <img src="images/home/imgnew/search-button.png" alt="" />
                </button>
            </form>
        </div>
      </div>
    );
  };
  
  export default SubscriptionForm;