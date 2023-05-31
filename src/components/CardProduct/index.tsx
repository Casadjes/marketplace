import { IProduct } from "../../interfaces/Product";

interface Props {
	item: IProduct;
}

export const CardProduct = ({ item }: Props) => {
	return (
		<div className='max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
			<div className='px-4 py-2'>
				<h1 className='text-xl font-bold text-gray-800 uppercase dark:text-white truncate'>
					{item.title}
				</h1>
			</div>

			<img
				className='object-contain w-full h-48 mt-2'
				src={item.image}
				alt={item.title}
			/>

			<div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
				<h1 className='text-lg font-bold text-white'>${item.price}</h1>
				<button className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'>
					Add to cart
				</button>
			</div>
		</div>
	);
};
