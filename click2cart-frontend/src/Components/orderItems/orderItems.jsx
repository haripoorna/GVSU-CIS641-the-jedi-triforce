import React, { useContext } from "react";
import "./orderItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const OrderItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleProceedToCheckout = async () => {
    try {
      // Assuming you have a function confirmOrder that makes the API call
      // const response = await confirmOrder({
      //   user,
      //   cartData: Object.keys(cartItems).map((productId) => ({
      //     productId,
      //     quantity: cartItems[productId],
      //   })),
      //   totalAmount: getTotalCartAmount(),
      // });
      const cartData = []
      products.map((e)=>{
        if(cartItems[e.id]>0){
            cartData.push({
              productId: e.id,
              quantity: cartItems[e.id],
            })
        }
      })
      console.log(cartData)
      const response = await confirmOrder({
        user,
        cartData,
        totalAmount: getTotalCartAmount(),
      });
      
      // Handle success (e.g., show a success message)
      console.log("Order confirmed successfully:", response);

      // Clear the cart after confirming the order
      // Add your logic to clear the cart in your ShopContext
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error confirming the order:", error);
    }
  };

  // Function to make API call to confirm the order
  const confirmOrder = async (orderData) => {
    const apiUrl = "http://localhost:4000/confirmOrder"; // Update with your actual API URL

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Error confirming the order: ${response.statusText}`);
    }

    return response.json();
  };


  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className="cartitems-quatity">{cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          {/* <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
