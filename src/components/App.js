import React from "react";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { Header } from "./Header";

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
