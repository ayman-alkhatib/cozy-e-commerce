export default async function orderPost(order) {
    try {
        const res = await fetch(`http://localhost:8080/orders`, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(order)
        })
        if (!res.ok) {
            throw Error("Failed to fetch products list data. Please try again later.")
        }
        return res
    } catch (error) {
        throw error
    }
}
