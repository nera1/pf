import { useReactToPrint } from "react-to-print";
import {
  useRef,
  useImperativeHandle,
  forwardRef,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

import "../styles/document.css";

export interface PortfolioRef {
  toPrint: () => void;
}

export interface LinkTag {
  href: string;
  tag: string;
  favicon?: string;
}

const LinkTag: FunctionComponent<LinkTag> = ({ href, tag, favicon }) => {
  return (
    <label>
      <img width={20} height={20} src={favicon} />
      <a href={href}>{tag}</a>
    </label>
  );
};

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
              className="object-cover rounded-full w-[180px] h-[180px]"
              src="https://github.com/shadcn.png"
              alt="nera"
            />
            <div className="flex flex-col justify-center grow info">
              <p className="text-2xl font-bold">엄인용</p>
              <ul className="text-sm font-medium">
                <li>
                  <label>
                    Blog.
                    <LinkTag
                      href="https://sumr.it"
                      tag="sumr.it"
                      favicon="https://sumr.it/favicon.ico"
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Github.
                    <LinkTag
                      href="https://github.com/nera1"
                      tag="nera"
                      favicon="https://github.githubassets.com/favicons/favicon.svg
"
                    />
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
