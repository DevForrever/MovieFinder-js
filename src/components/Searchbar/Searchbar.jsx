import s from "./Searchbar.module.css";
import Background from "../../assets/Background.png";
import Search from "../../assets/Search.svg";
import { useSearchParams } from "react-router-dom";

export const Searchbar = ({ onhandleSearch, title }) => {
    const [SearchParams, SetSearchParams] = useSearchParams();
    const query = SearchParams.get("query") ?? "";
    const handleSubmit = (e) => {
        e.preventDefault();
        onhandleSearch(query);
    };
    const handleInput = (e) => {
        const name = e.target.value;

        if (name === "") return SetSearchParams({});
        SetSearchParams({ query: name });
    };

    return (
        <div
            className={s.container}
            style={{ background: `url(${Background}) no-repeat center / cover` }}
        >
            <h1 className={s.title}>{title}</h1>
            <form onSubmit={handleSubmit} className={s.form} action="">
                <input
                    placeholder="What do you want to watch?"
                    className={s.header__inp}
                    type="text"
                    onChange={handleInput}
                    value={query}
                />
                <button className={s.button} type="submit">
                    <img className={s.button} src={Search} alt="" />
                </button>
            </form>
        </div>
    );
};
