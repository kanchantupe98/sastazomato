import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from '@firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyCx3Q6sTZiPn0jQryNN46X0whxnYV3c4r0",
  authDomain: "foodapp1-a9cb4.firebaseapp.com",
  projectId: "foodapp1-a9cb4",
  storageBucket: "foodapp1-a9cb4.appspot.com",
  messagingSenderId: "854480266435",
  appId: "1:854480266435:web:f4a299a8e59f42a2006e76",
  measurementId: "G-QB8MKESRY0"

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const itemsRef = ref(database, 'FoodData');

const firestore = getFirestore(app);
const collectionRef = collection(firestore, 'FoodData'); // Replace with your collection name
const data = [];

getDocs(collectionRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data()); // Retrieved data

    });
    // console.log(data);
    // Use the data in your app
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

export{data};