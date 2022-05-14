import { useState } from "react"
import { currencies } from "../currencies"
import { Result } from "./Result";
import "./style.css";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">
                Przelicznik walut
            </h1>
            <p>
                <span className="form__labelText">
                    Kwota w zł*:
                </span>
                <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę w zł"
                    className="form__field"
                    type="number"
                    required
                    step="0.01"
                />
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option 
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>

            <p className="form__info">
                Kursy pochodzą ze strony nbp.pl z Tabeli nr 084/A/NBP/2022 z dnia 2022-05-02
            </p>

            <Result result={result} />
        </form>
    );
};

export default Form;