import {doc, deleteDoc, getDocs, query, collection} from 'firebase/firestore';
import {db} from './firebaseConfig';
import {FAVORITES} from '../contants/FirestoreKeys';

export const removeFavorite = async ({word}: {word: string}) => {
  await deleteDoc(doc(db, FAVORITES, word));
};

export const getColectionFirestore = async () => {
  const q = query(collection(db, FAVORITES));
  const docSnap = await getDocs(q);

  docSnap.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());
  });
};
