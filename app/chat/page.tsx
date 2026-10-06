"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();

  const [match, setMatch] =
    useState<any>(null);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        sender: "them",
        text: "Hey! I think we'd make great flatmates 👀",
      },
      {
        sender: "me",
        text: "Looks like we matched pretty well 😄",
      },
      {
        sender: "them",
        text: "When are you free to discuss the flat?",
      },
    ]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "currentMatch"
    );

    if (saved) {
      setMatch(JSON.parse(saved));
    }
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "me",
        text: message,
      },
    ]);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex justify-center">

      <div className="w-full max-w-md bg-white min-h-screen flex flex-col">

        <div
          className="
            border-b
            p-4
            flex
            items-center
            gap-4
          "
        >

          <button
            onClick={() =>
              router.push("/dashboard")
            }
          >
            <ArrowLeft />
          </button>

          <div>

            <h2 className="font-bold">
              {match?.name}
            </h2>

            <p className="text-green-600 text-sm">
              Active now
            </p>

          </div>

        </div>

        <div className="flex-1 p-4 space-y-4">

          {messages.map(
            (msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === "me"
                    ? "ml-auto bg-purple-700 text-white"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            )
          )}

        </div>

        <div
          className="
            border-t
            p-4
            flex
            gap-3
          "
        >

          <input
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Type a message..."
            className="
              flex-1
              border
              rounded-xl
              px-4
              py-3
            "
          />

          <button
            onClick={sendMessage}
            className="
              bg-purple-700
              text-white
              px-5
              rounded-xl
            "
          >
            ↑
          </button>

        </div>

      </div>

    </div>
  );
}