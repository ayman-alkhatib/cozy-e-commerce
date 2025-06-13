export default async function apiLogin(email, password) {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
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

    // Store the token in localStorage
    console.log(data)
    localStorage.setItem("access_token", data.access_token);

    return data;
  } catch (error) {
    throw error;
  }
}
