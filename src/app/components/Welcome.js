import Image from "next/image";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-sky-100 to-sky-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to Chat App
      </h2>

      <div className="mb-6">
        <Image
          src="/img/logo(3).png"
          height={80}
          width={80}
          alt="App Logo"
          className="rounded-full shadow-lg"
        />
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Sign in with Google to chat with your friends.
      </p>

      <button
        onClick={googleSignIn}
        className="cursor-pointer flex items-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition"
      >
        <Image
          src="/img/btn_google_signin_dark_pressed_web.png"
          alt="Sign in with Google"
          height={200}
          width={200}
        />
      </button>
    </main>
  );
};
export default Welcome;
