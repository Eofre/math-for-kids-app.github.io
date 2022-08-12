import { useState } from "react";
import Equation from "./Equation";
import Statistics from "./Statistics";
let numberMin = 0;
let numberMax = 1;
let count = 1;
let countRecord = 0;
if (
  localStorage.getItem("gameRecord") === undefined ||
  localStorage.getItem("gameRecord") === NaN
) {
  localStorage.setItem("gameRecord", countRecord);
}

function Addition() {
  const [answer, setAnswer] = useState("");
  const [numberOne, setNumberOne] = useState(1);
  const [numberTwo, setNumberTwo] = useState(0);
  const [gameAccount, setGameAccount] = useState(1);
  const [gameRecord, setGameRecord] = useState(
    +localStorage.getItem("gameRecord")
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
    if (Number(answer) === numberOne + numberTwo) {
      console.log("Верно");
      numberMax = numberMax + 5;
      numberMin = numberMin + 2;
      generationNumber(numberMin, numberMax);
      console.log(numberMin);
      console.log(numberMax);
      count++;
      setGameAccount(count);
      console.log(gameAccount);
      if (gameRecord < count) {
        setGameRecord(count - 1);
        localStorage.setItem("gameRecord", gameRecord + 1);
      }
    } else {
      count = 1;
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
          <Statistics gameAccount={gameAccount} gameRecord={gameRecord} />
          <Equation sign="+" numberOne={numberOne} numberTwo={numberTwo} />
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

export default Addition;
