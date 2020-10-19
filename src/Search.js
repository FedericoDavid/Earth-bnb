import React, { useState } from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css"; //Main Style files
import "react-date-range/dist/theme/default.css"; //Theme css file
import { DateRangePicker } from "react-date-range"; //Custom Library
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";

//Date Picker
function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEnDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };
    
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEnDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange=
                {handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button>Search Earthbnb</Button>
        </div>
    )
}

export default Search

//Install npm i react-date-range = a custom library with date picker
// Install npm i date-fns = necessary complement to work correctly