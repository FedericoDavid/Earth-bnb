import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

import './css/Search.css';

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEnDate] = useState(new Date());

  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEnDate(ranges.selection.endDate);
  }

  return (
    <div className='search-container'>
      <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <div className='search-basement'>
          <h2 className='guests-title'>
            Number of guests <PeopleIcon />
          </h2>
          <input min={0} defaultValue={2} type='number' className='search-input' />
          <Button className='search-btn' onClick={() => history.push('/search')}>
            Search Earthbnb
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
