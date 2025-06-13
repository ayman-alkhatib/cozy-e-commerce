export default async function fetchAllOrderByEmail(email) {
  if (!email) return [];
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/orders/all/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
