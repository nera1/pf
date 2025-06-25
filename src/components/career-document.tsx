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
      <a target="_blank" href={href}>
        {tag}
      </a>
    </label>
  );
};

const CareerDocument = forwardRef<PortfolioRef>((_, ref) => {
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
          <h2>Experience</h2>
          <ul dir="auto">
            <li className="career">
              <div className="date">
                <label>(주)FutureICT</label>
                <label>2021.12 ~ 2024.03</label>
                <label>(2년 3개월)</label>
              </div>
              <div className="data">
                <label>
                  LTE 라우터 기반 IoT 데이터 수집 및 가공, 모니터링 서비스
                </label>
                <ul>
                  <li>
                    Node-red 플로우 노드 구성
                    <ul>
                      <li>MQTT 메세지 파싱 및 DB입출력 플로우 구성</li>
                      <li>Redis를 활용한 장비 정보 캐싱</li>
                    </ul>
                  </li>
                  <li>
                    Node-red 플로우 노드 구성
                    <ul>
                      <li>
                        Grafana 오픈소스 활용, InfluxDB 대시보드 차트 패널 제작
                      </li>
                    </ul>
                  </li>
                  <li>
                    React, Grafana를 활용한 모니터링 웹 페이지 제작
                    <ul>
                      <li>Ubuntu Server에서 React SPA 웹 어플리케이션 배포</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </>
  );
});

export default CareerDocument;
