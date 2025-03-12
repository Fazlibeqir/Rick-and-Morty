import React from "react";

interface LanguegeSwitcherProps {
    language: "en" | "de";
    setLanguage: (language: "en" | "de") => void;
}

const LanguageSwitcher: React.FC<LanguegeSwitcherProps> = ({ language, setLanguage }) => {
    return (
        <div>
            <button onClick={() => setLanguage("en")} disabled={language === "en"}>English</button>
            <button onClick={() => setLanguage("de")} disabled={language === "de"}> German</button>
        </div>
    );
}

export default LanguageSwitcher;