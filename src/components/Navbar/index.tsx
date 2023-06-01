import { useState } from "react";

interface Props {
	categories: [];
	onClickItem: (value: string) => void;
}

export const Navbar = ({ categories = [], onClickItem }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCloseIcon, setIsCloseIcon] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		setIsCloseIcon(!isCloseIcon);
	};

	const handleSetClickCategory = (event: any) => {
		event.preventDefault();
		onClickItem("");
	};

	return (
		<nav className='relative mb-12 bg-white shadow '>
			<div className='container px-6 py-3 mx-auto md:flex'>
				<div className='flex items-center justify-between'>
					<a href='#' onClick={handleSetClickCategory}>
						<img
							className='w-auto h-6 sm:h-7'
							src='https://merakiui.com/images/full-logo.svg'
							alt=''
						/>
					</a>

					{/* Mobile menu button */}
					<div className='flex lg:hidden'>
						<button
							onClick={toggleMenu}
							type='button'
							className='text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600  md:hidden'
							aria-label='toggle menu'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className={`w-6 h-6 lg:hidden ${isCloseIcon ? "hidden" : ""}`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className={`w-6 h-6 lg:hidden ${isCloseIcon ? "" : "hidden"}`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu open: "block", Menu closed: "hidden" */}
				<div
					className={`${
						isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
					} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}>
					<div className='flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0'>
						{categories.map((item: string, index) => {
							return (
								<a
									key={index}
									href='#'
									className='px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2'
									onClick={() => onClickItem(item)}>
									{item}
								</a>
							);
						})}
					</div>

					<div className='relative mt-4 md:mt-0'>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<svg
								className={`w-5 h-5 text-gray-400 ${
									isOpen ? "hidden lg:block" : "lg:hidden"
								}`}
								viewBox='0 0 24 24'
								fill='none'>
								<path
									d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</span>

						<input
							type='text'
							className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lgdark:text-gray-300  focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
							placeholder='Search'
							onChange={(event) => onClickItem(event.target.value)}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};
