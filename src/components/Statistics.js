function Statistics(props) {
  return (
    <div className="page__statistics">
      <p className="page__statistics-item page__statistics-record">
        Рекорд: {props.gameRecord}
      </p>
      <p className="page__statistics-item">Звание:</p>
      <p className="page__statistics-item">Уровень: {props.gameAccount}</p>
    </div>
  );
}

export default Statistics;
