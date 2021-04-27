import "./CardLittle.css";

function CardLittle({ imgUrl, city, time }) {
  return (
    <div className="cardLittle">
      <img src={imgUrl} alt="" />
      <div className="cardLittle__info">
        <h4>{city}</h4>
        <p>{time} hour drive</p>
      </div>
    </div>
  );
}

export default CardLittle;
