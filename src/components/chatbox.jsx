import { useRef, useState } from "react";
import { SendHorizonal } from "lucide-react";
export default function ChatBox() {
  const User = useRef("User1");
  const [text, setText] = useState("");
  const [messages, setMessage] = useState([
    {
      user: "User1",
      text: "This is test text..",
    },
    {
      user: "User2",
      text: "This is also test text..",
    },
  ]);

  function handleSubmit() {
    setMessage([...messages, { user: User.current, text: text }]);
    setText("");
  }
  return (
    <>
      <div className="p-4 space-y-3 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col max-w-[80%] ${
              msg.user === User.current ? "self-end" : "self-start"
            }`}
          >
            <strong className="text-[15px] text-white">{msg.user}</strong>
            <div
              className={`p-2 rounded-lg text-white ${
                msg.user === User.current ? "bg-[#272538]" : "bg-[#544E90]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full sm:w-[80%] right-0 -z-10">
        <div className="bg-[#272538]  p-3 m-2 my-3 rounded-xl flex justify-between">
          <input
            className="outline-none cursor-text w-full"
            type="text"
            name="textbox"
            id="textbox"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            placeholder="Enter your text here"
          />
          <SendHorizonal className="cursor-pointer" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}
