import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './css/Header.css';

const Header = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link to='/'>
          <img
            className='header__icon'
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
            alt=''
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <div className='header__center-container'>
          <div className='header__center'>
            <input type='text' className='header__center-input' />
            <SearchIcon />
          </div>
        </div>
      </Grid>
      <Grid item xs>
        <div className='header__right'>
          <p className='header__host'>Become a host</p>
          <LanguageIcon className='header__Icon' />
          <ExpandMoreIcon className='header__expand' />
          <span className='header__avatar-container'>
            <Avatar className='header__avatar' />
          </span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
