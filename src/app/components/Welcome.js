import Image from "next/image";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <main className="welcome">
      <h2>Welcome to Chat App.</h2>
      <Image
        onClick={googleSignIn}
        src={"/img/logo(3).png"}
        height={50}
        width={50}
        alt="Sign in with Google"
      />
      <p>Sign in with Google to chat with with your fellow Frindes.</p>
      <button className="sign-in">
        <Image
          onClick={googleSignIn}
          src={"/img/btn_google_signin_dark_pressed_web.png"}
          alt="Sign in with Google"
          height={100}
          width={100}
        />
      </button>
    </main>
  );
};
export default Welcome;
