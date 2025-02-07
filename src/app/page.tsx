import Image from "next/image";
import Toolbar from "./components/toolbar";
import ChatInput from "./components/chat_text_field";

export default function Home() {

  return (
    <div>
      {/* Use Toolbar component */}
      <Toolbar
        title="Personalized AI"
      />
      <ChatInput />
    </div>
  );
}
