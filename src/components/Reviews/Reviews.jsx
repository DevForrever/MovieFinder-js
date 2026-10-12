import s from "../Reviews/Reviews.module.css";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export const Reviews = () => {
    const { id, mediatype } = useParams();
    const { data, loading, error } = useFetchData(`${mediatype}/${id}/reviews`);

    return (
        <section className={s.section}>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}

            {data &&
                data.results.map((item) => (
                    <p className={s.content}>{item.content}</p>
                ))}
        </section>
    );
};
