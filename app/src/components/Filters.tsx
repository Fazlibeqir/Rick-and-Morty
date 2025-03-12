import React from "react";

interface FiltersProps {
    status: string;
    species: string;
    sortBy: string;
    setStatus: (status: string) => void;
    setSpecies: (species: string) => void;
    setSortBy: (sortBy: string) => void;
    language: "en" | "de";
}

const Filters: React.FC<FiltersProps> = ({
    status,
    setStatus,
    species,
    setSpecies,
    sortBy,
    setSortBy,
    language,
}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
            {/* Status */}
            <select className="form-select w-auto" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">{language === "en" ? "All Statuses" : "Alle Status"}</option>
                <option value="alive">{language === "en" ? "Alive" : "Lebendig"}</option>
                <option value="dead">{language === "en" ? "Dead" : "Tot"}</option>
                <option value="unknown">{language === "en" ? "Unknown" : "Unbekannt"}</option>
            </select>

            {/* Species */}
            <select className="form-select w-auto" value={species} onChange={(e) => setSpecies(e.target.value)}>
                <option value="">{language === "en" ? "All Species" : "Alle Spezies"}</option>
                <option value="human">Human</option>
                <option value="alien">Alien</option>
                <option value="robot">Robot</option>
                <option value="unknown">{language === "en" ? "Unknown" : "Unbekannt"}</option>
            </select>

            {/* Sorting */}
            <select className="form-select w-auto" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">{language === "en" ? "Sort By" : "Sortieren nach"}</option>
                <option value="name">{language === "en" ? "Name" : "Name"}</option>
                <option value="origin">{language === "en" ? "Origin" : "Herkunft"}</option>
            </select>
        </div>
    );
};

export default Filters;