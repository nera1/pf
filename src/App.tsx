import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { FileDown, Github } from "lucide-react";

import { Route, Routes, Navigate } from "react-router-dom";

import { PortfolioRef } from "./components/document";

import Selector from "./components/selector";

import SwingPortfolio from "./pages/swing/portfolio";

import SwingIntroduction from "./pages/swing/introduction";
import AptnerIntroduction from "./pages/aptner/introduction";
import AptnerPortfolio from "./pages/aptner/portfolio";
import AblyIntroduction from "./pages/ably/introduction";
import AblyPortfolio from "./pages/ably/portfolio";

import styles from "./App.module.scss";
import NextgroundIntroduction from "./pages/nextground/introduction";
import NextgroundPortfolio from "./pages/nextground/portfolio";
import MyrealtripIntroduction from "./pages/myrealtrip/introduction";
import MyrealtripPortfolio from "./pages/myrealtrip/portfolio";
import TrustayIntroduction from "./pages/trustay/introduction";
import TrustayPortfolio from "./pages/trustay/portfolio";
import PostypeIntroduction from "./pages/postype/introduction";
import PostypePortfolio from "./pages/postype/portfolio";

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
            <Route path="/" element={<Navigate to="/postype/introduction" />} />
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
            <Route path="/aptner">
              <Route
                path="introduction"
                element={<AptnerIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<AptnerPortfolio ref={childRef} />}
              />
            </Route>
            <Route path="/ably">
              <Route
                path="introduction"
                element={<AblyIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<AblyPortfolio ref={childRef} />}
              />
            </Route>
            <Route path="/nextground">
              <Route
                path="introduction"
                element={<NextgroundIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<NextgroundPortfolio ref={childRef} />}
              />
            </Route>
            <Route path="/myrealtrip">
              <Route
                path="introduction"
                element={<MyrealtripIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<MyrealtripPortfolio ref={childRef} />}
              />
            </Route>
            <Route path="/trustay">
              <Route
                path="introduction"
                element={<TrustayIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<TrustayPortfolio ref={childRef} />}
              />
            </Route>
            <Route path="/postype">
              <Route
                path="introduction"
                element={<PostypeIntroduction ref={childRef} />}
              />
              <Route
                path="portfolio"
                element={<PostypePortfolio ref={childRef} />}
              />
            </Route>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
