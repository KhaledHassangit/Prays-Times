import usePrayerTimes from "../Api/UsePrayerTimes";

// eslint-disable-next-line react/prop-types
const Pray = ({ city }) => {
    const { prayerTimes } = usePrayerTimes(city); 
    console.log("Pray Component:", prayerTimes);

    const prayers = [
        { name: "الفجر", time: prayerTimes.Fajr },
        { name: "الظهر", time: prayerTimes.Dhuhr },
        { name: "العصر", time: prayerTimes.Asr },
        { name: "المغرب", time: prayerTimes.Maghrib },
        { name: "العشاء", time: prayerTimes.Isha }
    ];

    return (
        <div className="prayer-times">
            {prayers.map((pray, index) => (
                <div key={index} className="pray">
                    <p className="name">{pray.name} :</p>
                    <p className="time">{pray.time || "...loading"}</p>
                </div>
            ))}
        </div>
    );
};

export default Pray;
