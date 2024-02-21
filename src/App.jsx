import Instructions from "./instructions/Instructions";
import Header from "./components/Header";
import Sum from "./components/Sum";
import Piece from "./components/Piece";
import "./styles.css";

export default function App() {
  const log = () => {
    console.log("hello world");
  };

  return (
    <div className="App">
      <Instructions />
      <div className="block">
        Insert your components here
        <Header title="React is amazing!" />
        <Sum num1={10} num2={22} />
        <Piece log={log} />
      </div>
    </div>
  );
}
