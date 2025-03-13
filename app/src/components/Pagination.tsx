import React from "react";

interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    hasNext: boolean;
    hasPrev: boolean;
    language: "en" | "de";
}
const Pagination: React.FC<PaginationProps> = ({ page, setPage, hasNext, hasPrev, language }) => {
    return (
        <div className="d-flex justify-content-center my-4">
            <button
                className="btn btn-primary mx-2"
                onClick={() => setPage(page - 1)}
                disabled={!hasPrev}
            >
                {language === "en" ? "Previous" : "Zurück"}
            </button>
            <span className="mx-3">
                {language === "en" ? "Page" : "Seite"} {page}
            </span>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setPage(page + 1)}
                disabled={!hasNext}
            >
                {language === "en" ? "Next" : "Weiter"}
            </button>
        </div>
    );
}

export default Pagination;