import apiConfirmPayment from "../api/apiConfermPaymant";
import apiOrderPost from "../api/apiOrderPost";

function orderService() {

  async function orderPost(orderObj) {
    const data = await apiOrderPost(orderObj);
    const paymentLink = data.checkoutUrl;
    localStorage.setItem("order_id", data.orderId);
    window.open(paymentLink, "_blank");
    return data;
  }

  async function confirmPayment(sessionId) {
    const data = await apiConfirmPayment(sessionId);
    if (data.status === "PAID") {
      // delete the cart and order_id from localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("order_id");
    }

    return data;    
  }

  return {
    orderPost,
    confirmPayment,
  };
}

export default orderService;
