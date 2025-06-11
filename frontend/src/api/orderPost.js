export default async function orderPost(order) {
  const token = localStorage.getItem("access_token");

  try {
    const res = await fetch(`http://localhost:8080/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error(await res.text());
    return res;
  } catch (error) {
    throw error;
  }
}
