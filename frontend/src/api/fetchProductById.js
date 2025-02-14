export default async function fetchProductById(id) {
    try {
        const res = await fetch(`http://localhost:8080/product/${id}`)
        if (!res.ok) throw Error("Failed to fetch product details data. Please try again later.")
        const data = await res.json()


        return {
            ...data,
            images: [
                "/image1.png",
                "/image2.png",
                "/image3.png",
                "/image4.png",
                "/image5.png",
            ],
        }
    } catch (error) {
        throw error
    }
}