import { useEffect, useState } from "react";
import { IProduct } from "./interfaces/Product";
import { ProductService } from "./services/products.service";
import { CategoryService } from "./services/category.service";
import { CardProduct } from "./components/CardProduct";
import { Navbar } from "./components/Navbar";

function App() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [category, setCategories] = useState<[]>([]);
	const [selectedCategory, setselectedCategory] = useState("");

	const productService = new ProductService();
	const categoryService = new CategoryService();

	useEffect(() => {
		loadDataProduct();
		loadDataCategories();
	}, []);

	const loadDataProduct = async () => {
		const data: IProduct[] = await productService.getAll();
		setProducts(data);
	};
	const loadDataCategories = async () => {
		const data: [] = await categoryService.getAll();
		setCategories(data);
	};

	const filterProduct = () => {
		if (selectedCategory) {
			const res = products.filter(function (item: IProduct) {
				const itemData =
					item.category.toUpperCase() + " " + item.title.toUpperCase();
				const textData = selectedCategory.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			return res;
		}
		return products;
	};

	return (
		<section className='w-full h-full min-h-screen bg-slate-200'>
			<div className='container px-6 py-10 mx-auto'>
				<div className='flex items-center justify-between'>
					<h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl '>
						Marketplace React + Typescript
					</h1>

					<button className='focus:outline-none'></button>
				</div>

				<hr className='my-8 border-gray-200' />
				<Navbar
					categories={category}
					onClickItem={(item: string) => setselectedCategory(item)}
				/>

				<div className='grid grid-cols gap-8 md:grid-cols-2 xl:grid-cols-4'>
					{filterProduct().map((item, index) => {
						return <CardProduct key={index} item={item} />;
					})}
				</div>
			</div>
		</section>
	);
}

export default App;
