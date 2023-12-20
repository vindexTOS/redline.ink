import { createContext, useContext, useReducer, useRef, useState } from 'react';

type Cell = {
	mainRef: any;
	serviceRef: any;
	teamRef: any;
	projectRef: any;
	contactRef: any;
	scrollToSection: (ref: any, location: string) => void;
	locationRef: string;
};

const NavigationContext = createContext<Cell | null>(null);

export const NavigationContextProvider = ({ children }: { children: React.ReactNode }) => {
	const mainRef = useRef(null);
	const serviceRef = useRef(null);
	const teamRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);
	const [locationRef, setLocaationRef] = useState<string>('');

	const scrollToSection = (ref: any, location: string) => {
		setTimeout(() => {
			if (ref && ref.current) {
				ref.current.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				setLocaationRef(location);
			}
		}, 500);
	};
	return (
		<NavigationContext.Provider
			value={{ mainRef, serviceRef, teamRef, projectRef, contactRef, locationRef, scrollToSection }}
		>
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
