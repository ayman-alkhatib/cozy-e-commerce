export default async function apiRegister(email, password) {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
