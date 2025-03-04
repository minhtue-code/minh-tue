import React from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
    return (
        <div>
            <header className="header">
                <h1>Product Store</h1>
            </header>
            <main>
                <ProductList />
            </main>
            <footer className="footer">
                <p>&copy; 2025 Product Store.</p>
            </footer>
        </div>
    );
};

export default App;
