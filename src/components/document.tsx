import { useReactToPrint } from "react-to-print";
import { FunctionComponent, useRef, useImperativeHandle } from "react";

import "../styles/document.css";

const MyDocument: FunctionComponent = ({ ref }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrint = useReactToPrint({ contentRef });

  const toPrint = () => reactToPrint();

  useImperativeHandle(ref, () => ({
    toPrint,
  }));

  return (
    <>
      <button onClick={() => reactToPrint()}>Print</button>
      <div className="document">
        <div ref={contentRef} className="canvas">
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
          <h1>안녕하세요</h1>
          <h2>안녕하세요</h2>
          <h3>안녀어엉</h3>
          <p>My name is Manu Sporny.</p>
        </div>
      </div>
    </>
  );
};

export default MyDocument;
