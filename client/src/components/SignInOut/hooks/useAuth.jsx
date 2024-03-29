import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser, setError } from 'redux/features/appSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };

  return {
    handleLogin,
    handleSignOut,
  };
};

export default useAuth;
