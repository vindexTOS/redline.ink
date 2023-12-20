import React, { useEffect, useState } from 'react';

function Prompts() {
	const [resultText, setResultText] = useState<string[]>(['$ ']);
	const RobotPromps = {
		hello: ' გამარჯობა, კეთილი იყოს თქვენი მობრძანება Redline Technologies'.split(' '),
		iWilLHelP: 'დააკლიკე სტარტ ღილაკს და დაგეხმარები :)'.split(' '),
	};
	const changeText = (mappingText: string[]) => {
		let index = 0;

		const intervalId = setInterval(() => {
			if (index < mappingText.length) {
				const nextWord = mappingText[index];
				if (nextWord !== undefined) {
					setResultText((prevResultText: string[]) => [...prevResultText, `${nextWord} `]);
				}
				index++;
			} else {
				clearInterval(intervalId);
			}
		}, 500);
	};

	useEffect(() => {
		changeText(RobotPromps.hello);
		setTimeout(() => {
			setResultText(['$ ']);
			changeText(RobotPromps.iWilLHelP);
		}, 5000);
	}, []);
	return (
		<>
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
		</>
	);
}

export default Prompts;
