import {createAsyncThunk} from '@reduxjs/toolkit';
import {collection, doc, getDocs, query, setDoc} from 'firebase/firestore';
import {FAVORITES} from 'src/contants/FirestoreKeys';
import {db} from 'src/sevices/firebaseConfig';

const createDocFav = async ({uid}: {uid: string}) => {
  await setDoc(doc(db, uid, FAVORITES), {favorites: []});
};

export const getFavoritesByUid = createAsyncThunk(
  'favorites/getFavoritesByUid',
  async (uid: string) => {
    const q = query(collection(db, uid));
    const docSnap = await getDocs(q);
    let list: string[] = [];

    if (!docSnap.empty) {
      docSnap.forEach(docItem => {
        if (Object.hasOwn(docItem.data(), FAVORITES)) {
          if (!docItem.data().favorites) {
            createDocFav({uid});
          } else {
            list = [...docItem.data().favorites].map(i => i);
          }
        }
      });
    }
    return list;
  },
);

export const toggleFavorite = createAsyncThunk(
  'favorites/setToogleFavotite',
  async ({uid, word}: {uid: string; word: string}) => {
    try {
      const q = query(collection(db, uid));
      const docSnap = await getDocs(q);
      let favorites: string[] = [];

      if (!docSnap.empty) {
        docSnap.forEach(docItem => {
          if (Object.hasOwn(docItem.data(), FAVORITES)) {
            if (
              docItem.data().favorites.findIndex((i: string) => i === word) > -1
            ) {
              favorites = docItem
                .data()
                .favorites.filter((i: string) => i !== word);
            } else {
              favorites = [...docItem.data().favorites, word];
            }
          }
        });
      } else {
        favorites = [word];
      }

      await setDoc(doc(db, uid, FAVORITES), {favorites});

      return favorites;
    } catch (e) {
      console.warn('Erro to toggle word', e);
    }
  },
);
