import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import {useDispatch} from 'react-redux';
import {saveUserSection} from 'src/features/auth/actions';
import {auth} from 'src/sevices/firebaseConfig';
import {AppDispatch} from 'src/store';
import {useHandlerErrors} from './useHandlerErros';

type TLogin = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {showError} = useHandlerErrors();

  const createUser = ({email, password}: TLogin) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        if (user) {
          dispatch(
            saveUserSection({
              uid: user.uid,
              token,
            }),
          );
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showError({title: errorCode, message: errorMessage});
      });
  };

  const login = ({email, password}: TLogin) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async userCredential => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        if (user) {
          dispatch(
            saveUserSection({
              uid: user.uid,
              token,
            }),
          );
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showError({title: errorCode, message: errorMessage});
      });
  };

  return {
    createUser,
    login,
  };
};
