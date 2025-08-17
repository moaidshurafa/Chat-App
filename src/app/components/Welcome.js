import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import Image from "next/image";
import Logo from "../img/logo (3).png";
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
        src={Logo}
        height={50}
        width={50}
        alt="Sign in with Google"
      />
      <p>Sign in with Google to chat with with your fellow Frindes.</p>
      <button className="sign-in">
        <Image
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="Sign in with Google"
        />
      </button>
    </main>
  );
};
export default Welcome;
