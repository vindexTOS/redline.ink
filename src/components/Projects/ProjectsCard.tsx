import React, { FC } from 'react';
import { ProjectsType } from './Projects';
import '../Services/Services.scss';
type ProjectCardProp = {
	project: ProjectsType;
};
const ProjectsCard: FC<ProjectCardProp> = ({ project }) => {
	return (
		<div className="max-w-lg mx-auto rounded overflow-hidden   my-8 z-50 boxShaddow bg-gray-900/50 rounded-[20px]">
			<img className="w-full h-64 object-cover" src={project.photo} alt={project.title} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-gray-400">{project.title}</div>
				<p className="text-gray-400 text-base">{project.description}</p>
				<div className="mt-4">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						Visit Project
					</a>
				</div>
			</div>
			<div className="px-6 py-4">
				<p className="text-gray-500 text-base">Tech Stack:</p>
				<div className="flex flex-wrap">
					{project.tech.map((tech, index) => (
						<span
							key={index}
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
