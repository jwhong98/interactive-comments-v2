import { useState } from "react";
import "./App.css";
import DeleteCommentModal from "./components/DeleteCommentModal/DeleteCommentModal";
import Main from "./components/Main/Main";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      {isOpen && <DeleteCommentModal onClick={onToggle} />}
      <Main onClick={onToggle} />
    </div>
  );
}

export default App;
