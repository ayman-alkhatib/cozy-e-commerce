export default async function fetchProducts() {
    try {
        const res = await fetch(`http://localhost:8080/product/all`)
        if (!res.ok) throw new Error(await res.text())
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}


