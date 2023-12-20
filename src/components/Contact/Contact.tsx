import React from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { UseNavigationContext } from '../../context/NavigationContext';

export default function Contact() {
	const { contactRef } = UseNavigationContext();
	return (
		<div className="h-[100%]   w-[100%] flex flex-col items-center  flex items-center justify-around gap-10 z-50">
			<div className="w-[100%]     flex flex-wrap  items-center bg-orange-800/10 rounded-[8px] boxShaddow justify-around py-10 gap-10 h-[100%]">
				<div className="text-[1.4rem] text-white">
					Copyright ©{' '}
					<span ref={contactRef} className="text-red-600">
						RedLine
					</span>{' '}
					Technologies 2023
				</div>
				<div className="flex  flex-col  items-center justify-center">
					<h1 className="text-3xl text-white font-semibold mb-6 ">დაგვიკავშირდით</h1>

					<div className="flex  text-[2rem] items-center mb-4">
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
}
