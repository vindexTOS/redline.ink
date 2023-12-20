import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { collection, getDocs, orderBy, query } from '@firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MESURMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const fetchData = async (collectionName: string) => {
	try {
		const collectionRef = await collection(db, collectionName);
		const q = await query(collectionRef);

		const querySnapShot = await getDocs(q);
		const data: any = [];

		querySnapShot.forEach((doc) => {
			data.push({ id: doc.id, ...doc.data() });
		});

		return data;
	} catch (error) {
		throw new Error('error');
	}
};
