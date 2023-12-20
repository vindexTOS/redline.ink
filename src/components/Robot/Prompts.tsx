import React, { useEffect, useState } from 'react';
import { UseRobotContext } from '../../context/RobotContext';

function Prompts() {
	const { resultText } = UseRobotContext();
	return (
		<div className="w-[100%] justify-start items-center flex gap-1 flex-wrap p-4 text-[14px] ">
			{resultText.map((val: string, index: number) => (
				<p
					className={`${
						val == 'Redline '
							? 'text-red-600'
							: val == '$ '
							? 'text-yellow-300'
							: val == 'info@redline.ink '
							? 'text-yellow-400'
							: 'text-green-500'
					} text-center`}
					key={val + index}
				>
					{val}
				</p>
			))}
		</div>
	);
}

export default Prompts;
