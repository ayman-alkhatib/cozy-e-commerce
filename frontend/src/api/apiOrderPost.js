export default async function apiOrderPost(order) {
  const token = localStorage.getItem("access_token");

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error(await res.text());

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
