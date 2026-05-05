import React, { createContext, useState, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

function ThemePage() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Layout />
        </ThemeContext.Provider>
    );
}

// Layout Component
function Layout() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "light" ? "lightblue" : "lightgray",
        color: theme === "light" ? "#000000" : "black",
        height: "100vh",
        padding: "20px",
        textAlign: "center"
    };

    return (
        <div style={style}>
            <h1>Theme Context Example</h1>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemePage;