import React from "react";

interface LanguegeSwitcherProps {
    language: "en" | "de";
    setLanguage: (language: "en" | "de") => void;
}

const LanguageSwitcher: React.FC<LanguegeSwitcherProps> = ({ language, setLanguage }) => {
    return (
        <div className="text-center my-3">
        <button className="btn btn-secondary mx-2" onClick={() => setLanguage("en")} disabled={language === "en"}>
          English
        </button>
        <button className="btn btn-secondary mx-2" onClick={() => setLanguage("de")} disabled={language === "de"}>
          German
        </button>
      </div>
    );
}

export default LanguageSwitcher;