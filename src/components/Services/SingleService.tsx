import React, { FC, useRef } from 'react';
import { ServicesType } from './Services';
import useOutClick from '../../hooks/useOutClick';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
type ServiceProptype = {
	data?: ServicesType[];
	serviceID?: string;
	setOpenSingleService: React.Dispatch<React.SetStateAction<string>>;
};
const SingleService: FC<ServiceProptype> = ({ data, serviceID, setOpenSingleService }) => {
	const FoundedData = data?.find((val: ServicesType) => val.id == serviceID);
	const ref = useRef(null);
	const closeSingle = () => {
		setOpenSingleService('');
	};
	useOutClick(ref, closeSingle);

	if (!FoundedData) {
		return <div>NOT FOUND</div>;
	}
	const { title, titleOne, titleTwo, decOne, decTwo, priceRange, icon, description, id, timeLine } =
		FoundedData || {};
	return (
		<div className="backdrop-blur-sm	w-[100%] bg-gray-300/20 w-full h-full flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
			<div
				ref={ref}
				className=" px-40 py-5  flex flex-col gap-10  rounded-md   bg-black/80 boxShaddow w-[70%]  h-[90%]"
			>
				<h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>

				<div className="flex items-start gap-2 flex-col space-x-4 mb-4">
					<img src={icon} alt={title} className="w-[200px] h-[200px]" />
					<span className="text-gray-400">შესრულების ვადა: {timeLine}</span>
				</div>
				<p className="text-gray-400 text-[1.2rem]">{description}</p>

				<div className="mb-4">
					<h2 className="text-lg font-semibold text-white">{titleOne}</h2>
					<p className="text-gray-400">{decOne}</p>
				</div>
				<div className="mb-4">
					<h2 className="text-lg font-semibold text-white">{titleTwo}</h2>
					<p className="text-gray-400">{decTwo}</p>
				</div>
				<div className="mb-4">
					<p className="  flex gap-2 text-green-300">
						Price Range:{' '}
						<span className="flex gap-2">
							{priceRange.map((val: string, index: number) => (
								<p>
									${val} {index >= 0 && index < 1 && '-'}
								</p>
							))}
						</span>
					</p>
				</div>
				<div className="flex   items-center justify-around">
					<div className="flex  text-[2rem] items-center  ">
						<FaEnvelope className="text-gray-600 mr-2" />
						<a href="mailto:info@redline.ink" className="text-blue-500 hover:underline">
							info@redline.ink
						</a>
					</div>

					<div className="flex  text-[2rem] items-center  ">
						<FaFacebook className="text-blue-700 mr-2" />
						<a
							href="https://www.facebook.com/profile.php?id=61553239725559"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							Redline - რედლაინი
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
