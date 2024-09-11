import { useState, Suspense, lazy, useEffect, useState as useLocalState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Header = lazy(() => import("./components/Header"));
const Pray = lazy(() => import("./components/Pray"));

const App = () => {
    const [city, setCity] = useState("Alexandria");
    const [showFallback, setShowFallback] = useLocalState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFallback(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showFallback && (
                <div className="loading">
                    <ClockLoader color="#fff" size={100} />
                </div>
            )}
            <Suspense fallback={<div />}>
                <section>
                    <div className="container">
                        <Header city={city} setCity={setCity} />
                        <Pray city={city} />
                    </div>
                </section>
            </Suspense>
        </div>
    );
};

export default App;
