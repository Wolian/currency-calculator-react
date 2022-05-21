import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [fetchState, setFetchState] = useState({
        state:"loading",
    });

    const [currencyDate, setCurrencyDate] = useState("");
    const [ratesData, setRatesData] = useState([]);
    

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setCurrencyDate(response.data.date);
                setRatesData(response.data.rates);
                setFetchState({
                    state: "success",
                });

            }   catch {
                setFetchState({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return {
        fetchState,
        ratesData,
        currencyDate,
    };
};