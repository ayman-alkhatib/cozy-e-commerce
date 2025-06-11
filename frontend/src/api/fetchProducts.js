export default async function fetchProducts() {
  const token = localStorage.getItem("access_token");
  try {
    const res = await fetch(`http://localhost:8080/product/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
