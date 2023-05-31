export class CategoryService {
	public async getAll(): Promise<any> {
		try {
			const response = await fetch(
				"https://fakestoreapi.com/products/categories"
			);
			return await response.json();
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
