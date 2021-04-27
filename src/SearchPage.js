import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62stys . 1 may to 30 may . 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Instant book</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        imgUrl="https://a0.muscache.com/im/pictures/39bd8431-e102-4310-9b58-eb9fca7d4b42.jpg?im_w=960"
        location="Private room in Germany"
        title="Stay at this spacious house"
        description="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Washing Machine"
        star="4.73"
        price="$20"
        total="$170 total"
      />
      <SearchResult
        imgUrl="https://a0.muscache.com/im/pictures/0e7a0955-5994-44ef-9d01-0ff105afd5e5.jpg?im_w=720"
        location="Private room in Germany"
        title="Stay at this spacious house"
        description="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Washing Machine"
        star="4.92"
        price="$60"
        total="$300 total"
      />
      <SearchResult
        imgUrl="https://a0.muscache.com/im/pictures/3f086c1c-c2c9-43b9-92d2-b07d11b5cf35.jpg?im_w=720"
        location="Private room in Germany"
        title="Stay at this spacious house"
        description="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Washing Machine"
        star="4.2"
        price="$30"
        total="$270 total"
      />
      <SearchResult
        imgUrl="https://a0.muscache.com/im/pictures/7428e701-897c-40ef-b4f3-f17e8c15eaf3.jpg?im_w=960"
        location="Private room in Germany"
        title="Stay at this spacious house"
        description="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Washing Machine"
        star="4.83"
        price="$56"
        total="$230 total"
      />
      <SearchResult
        imgUrl="https://a0.muscache.com/im/pictures/6e0e1ea4-7945-4234-9c4b-08d865bf842a.jpg?im_w=960"
        location="Private room in Germany"
        title="Stay at this spacious house"
        description="1 guest . 1 bedroom . 1 bed . Wifi . Kitchen . Washing Machine"
        star="4.9"
        price="$87"
        total="$344 total"
      />
    </div>
  );
}

export default SearchPage;
