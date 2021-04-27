import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "./Search";
import "./Banner.css";
import { useHistory } from "react-router";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search dates"}
        </Button>
      </div>

      <div className="banner__info">
        <h1>
          The
          <br /> Greatest
          <br /> Outdoors
        </h1>
        <p>Wishlists curated by Airbnb.</p>
        <Button onClick={() => history.push("/search")} variant="oulaned">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
