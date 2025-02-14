export default async function fetchProducts() {
    try {
        const res = await fetch(`http://localhost:8080/product/all`)
        if (!res.ok) throw Error("Failed to fetch products list data. Please try again later.")
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


