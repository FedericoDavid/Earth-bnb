import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>43 stays · 9 November to 26 November · 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 Bedroom · 1 bed · 1.5 shared Bthrooms · WiFi · Kitchen · Free Parking · Washing Machine"
        star={4.73}
        price="₤30 / Night"
        total="₤117 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 Bedroom · 1 bed · 1.5 shared Bthrooms · WiFi · Kitchen · Free Parking · Washing Machine"
        star={4.73}
        price="₤30 / Night"
        total="₤117 total"
      />
    </div>
  );
}

export default SearchPage;
