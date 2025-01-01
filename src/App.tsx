import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import MyDocument from "./components/document";

import { FileDown, Github } from "lucide-react";

import styles from "./App.module.scss";

type AppState = {
  isScrollingUp: boolean;
  lastScrollY: number;
};

function App() {
  const [state, setState] = useState<AppState>({
    isScrollingUp: false,
    lastScrollY: 0,
  });

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

  return (
    <>
      <main className={styles["main"]}>
        <header
          className={`${styles["header"]} transition-transform duration-300 ${
            state.isScrollingUp ? "translate-y-0" : "-translate-y-full"
          }
          }`}
        >
          <div className={styles["container"]}>
            <div className={styles["btn-group"]}>
              <Button variant="outline" size="icon" className="w-7 h-7">
                <FileDown />
              </Button>
              <Button variant="outline" size="icon" className="w-7 h-7">
                <Github />
              </Button>
            </div>
          </div>
        </header>
        <div className={styles["container"]}>
          <MyDocument />
        </div>
      </main>
    </>
  );
}

export default App;
