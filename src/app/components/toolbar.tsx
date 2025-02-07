import React from "react";
import "./../styles/toolbar.css"; // Import the CSS file

interface ToolbarProps {
  title: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  title,
}) => {
  return (
    <div className="toolbarContainer">
      <div className="title">{title}</div>
      <hr className="hr_line"></hr>
    </div>
  );
};

export default Toolbar;
