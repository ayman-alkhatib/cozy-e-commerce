export default async function fetchAllOrderByEmail(email) {
    if (!email) return []
    try {
        const res = await fetch(`http://localhost:8080/orders/all/${email}`)
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}