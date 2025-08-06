import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { FileDown, Github } from "lucide-react";

import { Route, Routes } from "react-router-dom";

import { PortfolioRef } from "./components/document";

import Portfolio from "./pages/portfolio";
import Career from "./pages/career";
import Introduction from "./pages/introduction";
import Selector from "./components/selector";

import SwingPortfolio from "./pages/swing/portfolio";

import styles from "./App.module.scss";
import SwingIntroduction from "./pages/swing/introduction";

type AppState = {
  isScrollingUp: boolean;
  lastScrollY: number;
};

function App() {
  const [state, setState] = useState<AppState>({
    isScrollingUp: false,
    lastScrollY: 0,
  });

  const childRef = useRef<PortfolioRef>(null);
  const handlePrint = () => {
    if (childRef.current) {
      childRef.current.toPrint();
    }
  };

  const handleScroll = () => {
    const { lastScrollY } = state;
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setState((prev) => ({ ...prev, isScrollingUp: true }));
    } else {
      setState((prev) => ({ ...prev, isScrollingUp: false }));
    }
    setState((prev) => ({ ...prev, lastScrollY: currentScrollY }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [state.lastScrollY]);

  useEffect(() => {
    setState((prev) => ({ ...prev, isScrollingUp: true }));
  }, []);

  return (
    <>
      <main className={styles["main"]}>
        <header
          className={`${styles["header"]} transition-transform duration-300 ${
            state.isScrollingUp ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className={styles["container"]}>
            <div className={styles["left"]}>
              <Selector />
            </div>
            <div className={styles["btn-group"]}>
              <Button
                onClick={handlePrint}
                variant="outline"
                size="icon"
                className="w-7 h-7"
              >
                <FileDown />
              </Button>
              <a
                href="https://github.com/nera1/pf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="w-7 h-7">
                  <Github />
                </Button>
              </a>
            </div>
          </div>
        </header>
        <div className={styles["container"]}>
          <Routes>
            <Route path="/" element={<Introduction reference={childRef} />} />
            <Route
              path="/portfolio"
              element={<Portfolio reference={childRef} />}
            />
            <Route path="/career" element={<Career reference={childRef} />} />
            <Route path="/swing">
              <Route
                path="introduction"
                element={<SwingIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<SwingPortfolio ref={childRef} />}
              />
            </Route>
            {/* <Route path="*" element={<Introduction reference={childRef} />} /> */}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
