import React from 'react';
import { Button, Grid } from '@material-ui/core';

import './GiftCards.css';

const GiftCards = () => {
  const giftCardSrc =
    'https://a0.muscache.com/im/pictures/3d10c82b-0d98-4557-b35a-7ff82052e466.jpg?im_w=1200';

  return (
    <div className='gift-cards-container'>
      <Grid container justifyContent='center'>
        <Grid item xs={2} sm={4} md={5}>
          <div className='gift__info'>
            <h1>
              Shop Airbnb <br />
              gift cards
            </h1>
            <Button className='gift__btn' variant='outlined'>
              <span>Learn more</span>
            </Button>
          </div>
        </Grid>
        <Grid item xs={2} sm={6} md={7}>
          <div className='gift-image-container'>
            <img src={giftCardSrc} alt='gift-cards' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GiftCards;
