import { useState, useEffect } from "react";
import axios from "axios";

const usePrayerTimes = (city) => {
    const [prayerTimes, setPrayerTimes] = useState({});
    const cities = [
        { name: "القاهرة", value: "Cairo" },
        { name: "الإسكندرية", value: "Alexandria" },
        { name: "الجيزة", value: "Giza" },
        { name: "قنا", value: "Qena" },
        { name: "الأقصر", value: "Luxor" },
        { name: "أسوان", value: "Aswan" }
    ];

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`;
                const response = await axios.get(apiUrl);
                if (response.data.code === 200) {
                    setPrayerTimes(response.data.data.timings);
                } else {
                    console.error("Failed to fetch prayer times");
                }
            } catch (error) {
                console.error("Error fetching prayer times:", error);
            }
        };

        fetchPrayerTimes();
    }, [city]);

    return { prayerTimes, cities };
};

export default usePrayerTimes;
