import {signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../firebaseConfig'


export const LoginAPI = (email, password) => {
    try {
        var res = signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        return err
    }
    return res;
}
export const RegisterAPI = (email, password) => {
    try {
        var res = createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        return err
    }
    return res;
}

export const GoogleSignInAPI = () => {
    try {
      let googleProvider = new GoogleAuthProvider();
      let res = signInWithPopup(auth, googleProvider);
      return res;
    } catch (err) {
      return err;
    }
  };

