import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

import './css/Banner.css';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  const history = useHistory();

  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner__searchButton'
          variant='outlined'
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className='banner__info'>
        <h1>Go Near</h1>
        <h5>Settle in somewhere new. Discover nearby stays to live, work, or just relax.</h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
