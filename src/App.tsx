import { useEffect, useState } from "react";
import "./App.css";
import "./components/number/numberComponent";
import NumberComponent from "./components/number/numberComponent";
import ResultComponent from "./components/result/resultComponent";

function App() {
  interface numObject {
    num: number;
    isGuessNum: boolean;
  }

  const [nums, setNums] = useState<numObject[]>([]);
  const [randomNum, setRandomNum] = useState<number>(
    Math.floor(Math.random() * 10)
  );
  const [gameText, setGameText] = useState<string>("Guess the number");

  useEffect(() => {
    setNums([]);
    for (let i = 1; i <= 11; i++) {
      setNums((prevNums) => [...prevNums, { num: i, isGuessNum: false }]);
    }
  }, []);

  const getClickedNumber = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const input = e.target as HTMLInputElement;
    if (input.innerText > randomNum.toString()) {
      setNums(
        nums.map((num) => ({
          num: num.num,
          isGuessNum:
            num.num >= Number(input.innerText) ? true : num.isGuessNum,
        }))
      );
      setGameText("Too high");
    } else if (input.innerText < randomNum.toString()) {
      setNums(
        nums.map((num) => ({
          num: num.num,
          isGuessNum:
            num.num <= Number(input.innerText) ? true : num.isGuessNum,
        }))
      );
      setGameText("Too low");
    } else {
      setGameText("You guessed ...");
    }
  };

  return (
    <>
      {/* <NumberComponent showIcon={true} num={1} /> */}
      <div className="numbers-container">
        {nums.map((num) => {
          return (
            <NumberComponent
              key={num.num}
              showIcon={num.isGuessNum}
              num={num.num}
              getClickedNumber={getClickedNumber}
            />
          );
        })}
      </div>
      <div className="result-container">
        <ResultComponent resultText={gameText} />
      </div>
    </>
  );
}

export default App;
