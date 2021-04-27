import "./LiveAnywhere.css";

function LiveAnywhere({ imgUrl, title }) {
  return (
    <div className="liveAnywhere">
      <img src={imgUrl} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default LiveAnywhere;
