import {createAsyncThunk} from '@reduxjs/toolkit';
import {collection, doc, getDocs, query, setDoc} from 'firebase/firestore';
import {HISTORIC} from 'src/contants/FirestoreKeys';
import {db} from 'src/sevices/firebaseConfig';
import {TWord} from 'src/types/word';

export const getList = createAsyncThunk(
  'history/getListHistoryByUid',
  async (uid: string) => {
    const q = query(collection(db, uid));
    const docSnap = await getDocs(q);
    let list: TWord[] = [];
    if (!docSnap.empty) {
      docSnap.forEach(docItem => {
        if (Object.hasOwn(docItem.data(), HISTORIC)) {
          list = [...docItem.data().historic];
        }
      });
    }
    return list;
  },
);

export const setHistoricInFirestore = createAsyncThunk(
  'history/setHistoricInFirestore',
  async ({uid, data}: {uid: string; data: Partial<TWord>}) => {
    try {
      const q = query(collection(db, uid));
      const docSnap = await getDocs(q);
      let hasUpdate = true;
      let historic: TWord[] = [];

      if (!docSnap.empty) {
        docSnap.forEach(docItem => {
          if (Object.hasOwn(docItem.data(), HISTORIC)) {
            if (
              docItem
                .data()
                .historic.findIndex((i: TWord) => i.word === data.word) > -1
            ) {
              hasUpdate = false;
              historic = [...docItem.data().historic];
            } else {
              historic = [...docItem.data().historic, data];
            }
          }
        });
      } else {
        historic = [data as TWord];
      }
      if (hasUpdate) {
        await setDoc(doc(db, uid, HISTORIC), {historic});
      }
      return historic;
    } catch (e) {
      console.warn('Erro to save', e);
    }
  },
);
