import { createContext, useContext, useReducer } from 'react';

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
};

const RobotContext = createContext<Cell | null>(null);

export const RobotContextProvider = ({ children }: { children: React.ReactNode }) => {
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

	return <RobotContext.Provider value={{ robotState, RobotDispatch }}>{children}</RobotContext.Provider>;
};

export const UseRobotContext = () => {
	const context = useContext(RobotContext);
	if (!context) {
		throw new Error('Context Not Wrapped Reload Page');
	}

	return context;
};
