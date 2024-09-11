import { useState } from "react";
import Header from "./components/Header";
import Pray from "./components/Pray";

const App = () => {
    const [city, setCity] = useState("Alexandria"); 

    return (
        <section>
          <div className="container">
            <Header city={city} setCity={setCity} />
            <Pray city={city} />
          </div>
        </section>
    );
};

export default App;
