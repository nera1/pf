import { useReactToPrint } from "react-to-print";
import { useRef, useImperativeHandle, forwardRef } from "react";

import "../styles/document.css";

export interface PortfolioRef {
  toPrint: () => void;
}

const MyDocument = forwardRef<PortfolioRef>((_, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrint = useReactToPrint({ contentRef });

  const toPrint = () => reactToPrint();

  useImperativeHandle(ref, () => ({
    toPrint,
  }));

  return (
    <>
      <div className="document">
        <div ref={contentRef} className="canvas">
          <div className="flex gap-x-10">
            <img
              className="object-cover rounded-none w-[180px] h-[180px]"
              src="https://github.com/shadcn.png"
              alt="nera"
            />
            <div className="grow info">
              <p className="text-3xl font-bold">엄인용</p>
              <ul className="text-sm font-medium">
                <li>
                  <label>
                    Blog.<a href="https://sumr.it">sumr.it</a>
                  </label>
                </li>
                <li>
                  <label>
                    Github.<a href="https://github.com/nera1">Nera</a>
                  </label>
                </li>
                <li>
                  <label>
                    Email.
                    <a href="#" onClick={() => false}>
                      ekd594ff@gmail.com
                    </a>
                  </label>
                </li>
                <li>
                  <label>
                    Phone.
                    <a href="#" onClick={() => false}>
                      010.2329.7269
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <h3>Test</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
        </div>
      </div>
    </>
  );
});

export default MyDocument;
