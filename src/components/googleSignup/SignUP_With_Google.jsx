import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";
import auth, { db } from "../../firebase/firebase";

export default function SignUp_With_Google({ error, setError }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handle_google_signIn = async () => {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          roll: "user",
        });
        navigate("/profile", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <button
          onClick={handle_google_signIn}
          type="button"
          className=" w-2/3 flex items-center justify-center text-sm md:text-lg font-medium text-gray-700 hover:text-gray-800 border border-blue-600 rounded-lg  py-2 md:py-2.5 hover:bg-blue-600 transition-all duration-200"
        >
          Google
        </button>
      </div>
    </>
  );
}
