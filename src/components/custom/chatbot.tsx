"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChatbotWidget() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chatbot");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        aria-label="Open Chatbot"
        className="p-2 rounded-full bg-slate-900 shadow-lg hover:shadow-xl transition-all animate-bounce-slow"
      >
        <Image
          src="/bot.svg"
          alt="Chatbot"
          width={50}
          height={50}
          className="w-10 h-10"
        />
      </button>
    </div>
  );
}
