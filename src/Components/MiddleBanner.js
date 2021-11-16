import { Button } from "@material-ui/core";

import "./css/middleBanner.css";

function MiddleBanner() {
  return (
    <div className="middle__container">
      <div className="middle__banner">
        <div className="middle__info">
          <h2>
            Your world is <br />
            worth sharing
          </h2>
          <h4>
            Turn your extra space <br />
            into your nex opportunity
          </h4>
          <Button className="middle__btn" variant="outlined">
            Become a host
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
