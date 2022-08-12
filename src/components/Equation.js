function Equation(props) {
  return (
    <div className="page__equation">
      <p className="page__equation-number">{props.numberOne}</p>
      <p className="page__equation-number">{props.sign}</p>
      <p className="page__equation-number">{props.numberTwo}</p>
      <p className="page__equation-number">=</p>
      <p className="page__equation-number">?</p>
    </div>
  );
}

export default Equation;
