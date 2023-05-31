export class ProductService {
	public async getAll(): Promise<any> {
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			return await response.json();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
