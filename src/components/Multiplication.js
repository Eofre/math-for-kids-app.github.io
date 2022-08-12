import { useState } from "react";
import Equation from "./Equation";
import Statistics from "./Statistics";
let numberMin = 0;
let numberMax = 1;
let count = 1;
let countRecord = 0;
if (
  localStorage.getItem("gameRecordMultiplication") === undefined ||
  localStorage.getItem("gameRecordMultiplication") === NaN
) {
  localStorage.setItem("gameRecordMultiplication", countRecord);
}

function Multiplication() {
  const [answer, setAnswer] = useState("");
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(0);
  const [gameAccount, setGameAccount] = useState(1);
  const [gameRecordMultiplication, setGameRecordMultiplication] = useState(
    +localStorage.getItem("gameRecordMultiplication")
  );

  function generationNumber(numberMin, numberMax) {
    setNumberOne(
      Math.floor(Math.random() * (numberMax - numberMin) + numberMin)
    );
    setNumberTwo(
      Math.floor(Math.random() * (numberMax - numberMin) + numberMin)
    );
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (Number(answer) === numberOne * numberTwo) {
      console.log("Верно");
      numberMax = numberMax + 2;
      numberMin = numberMin + 1;
      generationNumber(numberMin, numberMax);
      console.log(numberMin);
      console.log(numberMax);
      count++;
      setGameAccount(count);
      console.log(gameAccount);
      if (gameRecordMultiplication < count) {
        setGameRecordMultiplication(count - 1);
        localStorage.setItem(
          "gameRecordMultiplication",
          gameRecordMultiplication + 1
        );
      }
    } else {
      count = 0;
      setGameAccount(count);
      console.log("Не верно");
      numberMax = 1;
      numberMin = 0;
      generationNumber(numberMin, numberMax);
    }

    setAnswer("");
  }

  return (
    <section className="page">
      <div className="container">
        <div className="page__inner">
          <Statistics
            gameAccount={gameAccount}
            gameRecord={gameRecordMultiplication}
          />
          <Equation sign="*" numberOne={numberOne} numberTwo={numberTwo} />
          <form className="page__form">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              className="page__input"
              placeholder="Введите ответ"
            />
            <button onClick={checkAnswer} className="page__btn">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Multiplication;
