import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker
        className="search__datePicker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <Button onClick={() => history.push("search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
