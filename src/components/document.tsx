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
              src="/images/1.png"
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
                      010-2329-7269
                    </a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <blockquote>
            SpringBoot와 Java를 주력으로 사용하는 백엔드 개발자입니다 <br />
            클라우드 서비스와 Docker를 통해 실제 프로젝트를 배포한 경험이
            있습니다
            <br />
            개발자의 역량은 근거 있는 코드에서 나온다고 믿기에, 프레임워크와
            데이터베이스에 대한 지속적인 학습과 블로그 포스팅, 스터디를 통해
            꾸준히 역량을 강화해 나가고 있습니다
          </blockquote>
          <br />
          <h2>Skills</h2>
          <ul dir="auto">
            <li>
              <label>JAVA, Spring Boot</label>
            </li>
            <li>
              <label>Javascript & Typescript, React, Next.js</label>
            </li>
            <li>
              <label>PostgreSQL</label>
            </li>
            <li>
              <label>Git, Docker, Amazon EC2, Amazon RDS</label>
            </li>
          </ul>
          <h2>Experience</h2>
          <ul dir="auto">
            <li className="career">
              <div className="date">
                <label>(주)FutureICT</label>
                <label>2021.04 ~ 2024.02</label>
                <label>(2년 10개월)</label>
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
          <h2>Portfolio</h2>
          <ul dir="auto">
            <li>
              <label>2024.04</label>
              <label>Sumr</label>
              <ul>
                <li>
                  <a href="https://github.com/nera1/sumr">GitHub Repository</a>
                </li>
                <li>
                  <a href="https://sumr.it">Link</a>
                </li>
                <li>GitHub Pages로 배포되는 개발 블로그</li>
                <li>
                  Next.js 의 SSG(Static Site Generation)기능을 활용하여 작성된
                  마크다운 파일을 블로그 포스트로 변환
                </li>
                <li>Github Actions을 이용한 자동화된 배포 파이프라인 구축</li>
              </ul>
            </li>
            <li>
              <label>2024.07 ~ 2024.09</label>
              <label>Intarea</label>
              <ul>
                <li>
                  <a href="https://github.com/ekd594ff/jhta2402_final">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://intarea.store">Link</a>
                </li>
                <li>인테리어 업체와 소비자를 연결하는 중개플랫폼</li>
                <li>
                  Spring Boot 활용한 회원 가입 및 인테리어 업체 포트폴리오 작성,
                  조회 api 개발
                  <ul>
                    <li>
                      ERD와 엔티티를 구성하며 테이블 간의 관계와 트랜잭션에 대한
                      이해
                    </li>
                  </ul>
                </li>
                <li>
                  React및 Material UI 라이브러리를 사용한 프론트엔드 페이지를
                  구성
                  <ul>
                    <li>
                      하나의 웹 어플리케이션에서 vite 리액트 개발 서버와 Spring
                      Boot 백엔드 서버 구성
                    </li>
                  </ul>
                </li>
                <li>
                  Notion 프로젝트 관리
                  <ul>
                    <li>
                      백로그 및 스프린트 관리 기능을 활용하여 애자일(Agile) 개발
                      프로세스를 수행하며 팀과의 협업을 통해 프로젝트 목표를
                      주기적으로 설정하고 개선 작업을 지속적으로 진행
                    </li>
                  </ul>
                </li>
                <li>
                  Github
                  <ul>
                    <li>
                      팀 프로젝트의 브랜치 관리, Pull Request를 통한 협업 및
                      코드 충돌 해결
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h2>Education</h2>
          <ul dir="auto" className="education">
            <li>
              <label>2013.03 ~ 2020.02</label>
              건국대학교 컴퓨터공학 학사 졸업
            </li>
            <li>
              <label>2024.03 ~ 2024.09</label>
              중앙HTA JAVA 백엔드 개발자 교육 수료
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default MyDocument;
