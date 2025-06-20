export default async function fetchProductById(id) {
  const token = localStorage.getItem("access_token");

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return {
      ...data,
      images: [
        "/image1.png",
        "/image2.png",
        "/image3.png",
        "/image4.png",
        "/image5.png",
      ],
    };
  } catch (error) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
}
