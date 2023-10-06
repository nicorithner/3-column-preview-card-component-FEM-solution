import "./App.scss";
import { Column } from "./components/column/Column";
import sedanIcon from "../public/images/icon-sedans.svg";
import suvIcon from "../public/images/icon-suvs.svg";
import luxuryIcon from "../public/images/icon-luxury.svg";

function App() {
  return (
    <>
      <div className="columns-container">
        <Column
          color={"orange"}
          icon={sedanIcon}
          title="SEDAN"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        />
        <Column
          color={"darkCyan"}
          icon={suvIcon}
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
and off-road adventures. "
        />
        <Column
          color={"veryDarkCyan"}
          icon={luxuryIcon}
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style. "
        />
      </div>
    </>
  );
}

export default App;
