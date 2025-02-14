export default async function orderPost(order) {
    try {
        const res = await fetch(`http://localhost:8080/orders`, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(order)
        })
        if (!res.ok) throw new Error(await res.text())
        return res
    } catch (error) {
        throw error
    }
}
