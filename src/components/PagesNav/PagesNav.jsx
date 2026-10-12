import { useSearchParams } from "react-router-dom";
import s from "../PagesNav/PagesNav.module.css";

export const PagesNav = ({ currentPage, totalPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        searchParams.set("page", newPage);
        setSearchParams(searchParams);
    };

    const RenderPageButtons = () => {
        const visiblePages = 5;
        const buttons = [];
        let start = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
        let end = Math.min(start + visiblePages - 1, totalPages);

        if (end - start < visiblePages - 1) {
            start = Math.max(end - visiblePages + 1, 1);
        }

        for (let i = start; i <= end; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`${s.pageButton} ${
                        i === currentPage ? s.active : ""
                    }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>,
            );
        }

        return buttons;
    };

    return (
        <>
            {totalPages > 1 && (
                <div className={s.container__parent}>
                    <div className={s.container}>
                        <button
                            onClick={() => {
                                handlePageChange(currentPage - 1);
                            }}
                            disabled={currentPage === 1}
                            className={s.bl}
                        >
                            ←
                        </button>
                        {RenderPageButtons()}
                        <button
                            onClick={() => {
                                handlePageChange(currentPage + 1);
                            }}
                            disabled={currentPage === totalPages}
                            className={s.br}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
