import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { Auth } from "../firebase";

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, mdp: string) => void;
  logout: () => void;
  signIn: (email: string, mdp: string) => void;
};
export const AuthContext = createContext<AuthContextType>({
  user: Auth.currentUser,
  loading: false,
  signIn: (email: string, mdp: string) => {},
  signUp: (email: string, mdp: string) => {},
  logout: () => {},
});

export default function AuthProvider({
  children,
}: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
      setLoading(false);
    });
  }, []);
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(Auth);
      setLoading(false);
    } catch (err) {
      toast.error("erreur lors de la deconnexion " + err);
      setLoading(false);
    }
  };

  const signUp = async (email: string, mdp: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(Auth, email, mdp)
      .then((userCredential) => {
        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = error;
        if (code === "auth/email-already-in-use") {
          toast.error("email déjà utilisé");
        } else {
          toast.error(code);
        }
        setLoading(false);
      });
  };

  const signIn = async (email: string, mdp: string) => {
    if (loading) return;
    setLoading(true);
    await signInWithEmailAndPassword(Auth, email, mdp)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
      })
      .catch((error) => {
        const { code, message } = error;
        toast.error(`${code} : ${message}`);
        setLoading(false);
      });
  };
  const authValue: AuthContextType = {
    user,
    loading,
    signIn,
    logout,
    signUp,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
