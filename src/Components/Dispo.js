import { Link } from "react-router-dom";

import "./css/Dispo.css";

function Dispo() {
  return (
    <div className="dispo__aspo">
      <Link to="/" className="Info">
        <p>
          Consultá la información más actualizada sobre nuestra respuesta al
          COVID-19
        </p>
      </Link>
    </div>
  );
};

export default Dispo;
