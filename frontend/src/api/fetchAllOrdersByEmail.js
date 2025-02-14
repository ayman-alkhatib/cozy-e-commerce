export default async function fetchAllOrderByEmail(email) {
    if (!email) return []
    try {
        const res = await fetch(`http://localhost:8080/orders/all/${email}`)
        if (!res.ok) throw Error("Failed to fetch orders data. Please try again later.")
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}