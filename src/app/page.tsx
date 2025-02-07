import Image from "next/image";
import Toolbar from "./components/toolbar";

export default function Home() {
  const handleLeftClick = () => {
    console.log("Left button clicked");
  };

  const handleRightClick = () => {
    console.log("Right button clicked");
  };

  return (
    <div>
      {/* Use Toolbar component */}
      <Toolbar
        title="Personalized AI"
      />
    </div>
  );
}
