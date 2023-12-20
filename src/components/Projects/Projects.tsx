import { useEffect, useRef, useState } from 'react';
import { UseNavigationContext } from '../../context/NavigationContext';
import { fetchData } from '../../firebase/firebase';
import ProjectsCard from './ProjectsCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export type ProjectsType = {
	description: string;
	link: string;
	photo: string;
	tech: string[];
	title: string;
	id: string;
};
export default function Projects() {
	const { projectRef } = UseNavigationContext();
	const [ProjectData, setProjectData] = useState<any>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoading(true);
				const data = await fetchData('projects');
				setProjectData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				throw new Error('error');
			}
		};
		getData();
	}, []);
	const controls = useAnimation();

	const [ref, inView] = useInView({ triggerOnce: true });
	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [controls, inView]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="h-[100%] py-40 w-[100%] flex flex-col items-center  flex items-center justify-around gap-10 ">
			<span ref={projectRef}></span>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 100 }}
				animate={controls}
				className="w-[90%]     flex flex-wrap  items-center bg-purple-800/10 rounded-[12px]   boxShaddow justify-around py-20 gap-10 h-[100%] "
			>
				<motion.h1 className="font-geo text-[3rem] text-white text-center textshadow z-50 w-[100%] ">
					შესრულებული პროექტები
				</motion.h1>

				<motion.div className="flex flex-wrap justify-center gap-20 w-[100%]">
					{ProjectData?.map((val: ProjectsType) => (
						<ProjectsCard project={val} key={val.id} />
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
