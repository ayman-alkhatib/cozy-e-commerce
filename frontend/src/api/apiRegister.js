export default async function apiRegister(email, password) {
  try {
    const res = await fetch(`http://localhost:8080/auth/register`, {
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
