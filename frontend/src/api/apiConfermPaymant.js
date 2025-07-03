export default async function apiConfirmPayment(sessionId) {
  const token = localStorage.getItem("access_token");
  const orderId = localStorage.getItem("order_id");

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/payment/confirm-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        {
          sessionId,
          orderId,
        }
      ),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
