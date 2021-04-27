import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import CardLittle from "./CardLittle";
import "./Home.css";
import LiveAnywhere from "./LiveAnywhere";

function Home() {
  const history = useHistory();

  return (
    <div className="home">
      <Banner />

      <div className="home__content">
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
          city="Gebele"
          time="4.5"
        />
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240"
          city="Mardakan"
          time="3"
        />
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240"
          city="Sumqayit"
          time="2"
        />
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240"
          city="Quba"
          time="1"
        />
      </div>
      <div className="home__content">
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240"
          city="Nardaran"
          time="2.5"
        />
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240"
          city="Bilgah"
          time="3"
        />
        <CardLittle
          onClick={() => history.push("/search")}
          imgUrl="https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240"
          city="Lankaran"
          time="5.5"
        />
        <CardLittle
          imgUrl="https://a0.muscache.com/im/pictures/7c309a70-bc93-4603-8d3b-9d4cd9bf75b2.jpg?im_q=medq&im_w=240"
          city="Mingachevir"
          time="5.5"
        />
      </div>

      <div className="home__lveAnywhere">
        <h1 className="home__lveAnywhere-text">Live anywhere</h1>
        <div className="home__liveAnywhere-pics">
          <Link to="/search">
            <LiveAnywhere
              imgUrl="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
              title="Outdoor getaways"
            />
          </Link>
          <Link to="/search">
            <LiveAnywhere
              onClick={() => history.push("/search")}
              imgUrl="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
              title="Unique stays"
            />
          </Link>
          <Link to="/search">
            <LiveAnywhere
              onClick={() => history.push("/search")}
              imgUrl="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
              title="Entire homes"
            />
          </Link>
          <Link to="/search">
            <LiveAnywhere
              onClick={() => history.push("/search")}
              imgUrl="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"
              title="Pets allowed"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
