import { createContext, useContext, useReducer, useRef } from 'react';

type Cell = {
	mainRef: any;
	serviceRef: any;
	teamRef: any;
	projectRef: any;
	contactRef: any;
};

const NavigationContext = createContext<Cell | null>(null);

export const NavigationContextProvider = ({ children }: { children: React.ReactNode }) => {
	const mainRef = useRef(null);
	const serviceRef = useRef(null);
	const teamRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<NavigationContext.Provider value={{ mainRef, serviceRef, teamRef, projectRef, contactRef }}>
			{children}
		</NavigationContext.Provider>
	);
};

export const UseNavigationContext = () => {
	const context = useContext(NavigationContext);
	if (!context) {
		throw new Error('Context Not Wrapped Reload Page');
	}

	return context;
};
