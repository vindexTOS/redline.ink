import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { UseNavigationContext } from './NavigationContext';

type RobotAction = {
	type: string;
	payload: string | number | boolean;
};
type RobotState = {
	closeNav: boolean;
	closeTerminal: boolean;
	RobotSwtich: string;
	robotStart: boolean;
};

type Cell = {
	robotState: RobotState;
	RobotDispatch: React.Dispatch<RobotAction>;
	resultText: string[];
};

const RobotContext = createContext<Cell | null>(null);

export const RobotContextProvider = ({ children }: { children: React.ReactNode }) => {
	const { locationRef } = UseNavigationContext();

	const initialState = {
		closeNav: false,
		closeTerminal: false,
		robotStart: false,
		RobotSwtich: 'PROMTS',
	};
	const robotReducer = (state: RobotState, action: RobotAction) => {
		switch (action.type) {
			case 'CLOSE_TERMINAL':
				return {
					...state,
					closeTerminal: action.payload as boolean,
				};
			case 'CLOSE_NAV':
				return { ...state, closeNav: !state.closeNav };
			case 'ROBOT_SWTICH':
				return {
					...state,
					RobotSwtich: action.payload as string,
				};
			case 'CLOSE_TERMINAL_AND_NAV':
				return {
					...state,
					closeNav: false,
					closeTerminal: true,
				};
			case 'CONTACT':
				return { ...state, RobotSwtich: action.payload as string };

			case 'START_ROBOT':
				return { ...state, robotState: !state.robotStart };
			default:
				return state;
		}
	};
	const [robotState, RobotDispatch] = useReducer(robotReducer, initialState);

	// ROBOT PROMPTS

	const [resultText, setResultText] = useState<string[]>(['$ ']);
	const RobotPromps = {
		hello: ' გამარჯობა, კეთილი იყოს თქვენი მობრძანება Redline Technologies'.split(' '),
		iWilLHelP: 'დააკლიკე სტარტ ღილაკს და დაგეხმარები :)'.split(' '),
		services: 'ძაალიან კარგი შემოთავაზებები და სერვისები აქვთ, ბოლო-ბოლო მე გამაკეთეს :)'.split(' '),
		team: 'ნახეთ რა ვაჟკაცები გვყავს გუნდში, დათვებივით ბიჭებიი'.split(' '),
		project: 'თუ გინდა რომ შენი პროექტიც მოხვდეს აქ დაგვიკავშირდით: info@redline.ink '.split(' '),
		contact: 'დაგვიკავშირდით info@redline.ink  ან მოგვწერეთ facebook-ზე ლინკი ქვემოთ არის O_o'.split(' '),
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
		}, 200);
	};

	useEffect(() => {
		console.log(locationRef);
		setResultText([]);
		switch (locationRef) {
			case 'service':
				changeText(RobotPromps.services);
				break;
			case 'team':
				changeText(RobotPromps.team);
				break;
			case 'project':
				changeText(RobotPromps.project);
				break;
			case 'contact':
				changeText();
			default:
				changeText(RobotPromps.hello);
				break;
		}
	}, [locationRef]);

	return <RobotContext.Provider value={{ robotState, RobotDispatch, resultText }}>{children}</RobotContext.Provider>;
};

export const UseRobotContext = () => {
	const context = useContext(RobotContext);
	if (!context) {
		throw new Error('Context Not Wrapped Reload Page');
	}

	return context;
};
