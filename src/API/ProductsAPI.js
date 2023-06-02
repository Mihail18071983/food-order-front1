
import { instace } from "./OrdersAPI";

export async function getAllProducts() {
    try {
        const products = await instace.get("/products");
        return products
    }
    catch (error) {
        console.log(error)
    }
}