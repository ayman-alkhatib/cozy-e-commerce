export default async function orderPost(order) {
    try {
        const res = await fetch(`http://localhost:8080/orders`, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(order)
        })
        console.log(res)
        if (!res.ok) {
            console.log(res.statusText)
            console.log(await res.json())
            throw Error("Failed to fetch products list data. Please try again later.")
        }
        return res
    } catch (error) {
        throw error
    }
}
