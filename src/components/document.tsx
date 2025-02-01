import { useReactToPrint } from "react-to-print";
import {
  useRef,
  useImperativeHandle,
  forwardRef,
  FunctionComponent,
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
    <label className="ml-[8px]">
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
          <h1 className="text-4xl">백엔드 개발자 엄인용</h1>
          <div className="flex gap-x-[50px] my-[32px]">
            <img
              className="object-cover rounded-full w-[180px] h-[180px]"
              src="https://github.com/shadcn.png"
              alt="nera"
            />
            <div className="flex flex-col justify-center grow info">
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
                      tag="Nera"
                      favicon="https://github.githubassets.com/favicons/favicon.svg
"
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Email.
                    <a href="mailto:ekd594ff@gmail.com" onClick={() => false}>
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
          <h2>Skills</h2>
          <ul dir="auto">
            <li>
              <label>JAVA</label>
              <li>
                객체지향 프로그래밍의 기본 원칙에 충실하고, 람다 표현식 및
                스트림 API를 사용해 간결하고 효율적인 코드를 작성합니다
              </li>
            </li>
            <li>
              <label>Spring Boot</label>
              <li>
                Spring Boot를 활용하여 REST API를 설계하고 구현할 수 있습니다
              </li>
            </li>
          </ul>
          <h2>Portfolio</h2>
          <ul></ul>
          <h2>Experience</h2>
          <ul></ul>
        </div>
      </div>
    </>
  );
});

export default MyDocument;
