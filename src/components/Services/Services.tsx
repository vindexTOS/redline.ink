import React, { useEffect, useState } from 'react';
import './Services.scss';
import { motion as m } from 'framer-motion';
import ServicesCard from './ServicesCard';
import ServerIcon from '../../assets/icons/server.png';
import PhoneIcon from '../../assets/icons/smartphone.png';
import WebIcon from '../../assets/icons/web.png';
import { UseNavigationContext } from '../../context/NavigationContext';
import { fetchData } from '../../firebase/firebase';
export type ServicesType = {
	title: string;
	titleOne: string;
	titleTwo: string;
	decOne: string;
	decTwo: string;
	priceRange: string;
	icon: string;
	description: string;
	id: string;
	timeLine: string;
};

export default function Services() {
	const { serviceRef } = UseNavigationContext();
	const [ServicesData, setServicesData] = useState<ServicesType[]>();
	const itemVariants = {
		hidden: { opacity: 0, x: '-100%' },
		visible: { opacity: 1, x: 0 },
	};
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const data = await fetchData('services');
				setServicesData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				throw new Error('error');
			}
		};
		getData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="h-[100%] py-40 w-[100%] flex flex-col items-center  flex items-center justify-center gap-4 ">
			<span ref={serviceRef}></span>

			<m.div
				variants={itemVariants}
				className="w-[90%]   gap-5 flex flex-col items-center bg-gray-600/20 rounded-[8px] boxShaddow justify-around py-40 h-[100%]  "
			>
				<h1 className="font-geo text-[3rem] text-white textshadow z-50 ">ჩვენი მომსახურეობა</h1>
				<p className="font-geo text-[1rem] text-white textshadow z-50 w-[60%] text-center  ">
					ჩვენი სერვისები ითვალისწინებს მრავალფეროვან ასორტიმენტს, ეს იქნება მარტივი სტატიკური landing page
					ვებ საიტი თუ მობაილ აპლიკაცია, და ყველაფერი რაც მათ შორის არსებობს, ახალი პროექტის აწყობა ნულიდან თუ
					უკვე არსებულზე ბაგების გასწორება/feature-ების დამატება.
				</p>
				{/* <div className="flex items-center justify-center ">
          <h1 className="font-geo text-[1.3rem] text-white textshadow z-50 w-[60%] text-center  ">
            ტექნოლოგიას ვირჩევთ მხოლოდ და მხოლოდ კლიენტის ინტერესებიდან
            გამომდინარე, მაგრამ ჩვენი სტანდარტული სტაკი ძირითადად მოიცავს
          </h1>
        </div> */}
				<div className="flex flex-col items-center justify-center  gap-10">
					<h1 className="font-geo text-[1.3rem] text-white textshadow z-50 w-[60%] text-center  ">
						სერვისები
					</h1>
					<div className="z-50 flex items-center justify-center gap-10 w-[100%] flex-wrap ">
						<ServicesCard
							title="ვებ აპლიკაცია"
							description="ნებიესმიერი სირთულის საიტის, დამზადებული თქვენზე მორგებული ტექნოლოგით, და განთავსება ინტერნეტ სივრცეში"
							link=""
							icon={WebIcon}
						/>
						<ServicesCard
							title="მობაილ აპლიკაცია"
							description="თანამედროვე ტექნოლოგიებით შექმნილი, დახვეწილი მობილური აპლიკაცია, რომელიც განთავსდება google და Apple market-ზე"
							link=""
							icon={PhoneIcon}
						/>
						<ServicesCard
							title="სერვერი/ჰოსტინგი"
							description="სხვადასხვა ტიპის სერვერების მართვა, დაკავშირება და მანიპულაცია მონაცემთა ბაზებით, მათი განთავსება Rest API ის მეშვეობით."
							link=""
							icon={ServerIcon}
						/>
					</div>
				</div>
			</m.div>
		</div>
	);
}
