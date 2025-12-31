import firebase from './client/firebase.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(firebase);

async function getCategories(db) {
  const categoriesCol = collection(db, 'categories');
  const categorySnapshot = await getDocs(categoriesCol);
  const categoryList = categorySnapshot.docs.map(doc => doc.data());
  return categoryList;
}

console.log(await getCategories(db))