import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  const timestamp = message.createdAt?.seconds
    ? new Date(message.createdAt.seconds * 1000)
    : null;

  const timeString = timestamp
    ? timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, 
      })
    : "";

  return (
    <div
      className={`flex items-start gap-2.5 ${
        message.uid === user?.uid ? "justify-end" : ""
      }`}
    >
      {message.uid !== user?.uid && (
        <Image
          className="rounded-full"
          src={message.avatar}
          alt="user avatar"
          width={40}
          height={40}
        />
      )}

      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {message.name}
          </span>
          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {timeString || "…"}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {message.text}
        </p>
      </div>

      {message.uid === user?.uid && (
        <Image
          className="rounded-full"
          src={message.avatar}
          alt="user avatar"
          width={40}
          height={40}
        />
      )}
    </div>
  );
};

export default Message;
