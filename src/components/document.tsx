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
          <h2>Introduction</h2>
          <h4>“길을 몰라 더 재미있었던 개발”</h4>
          <p>
            웹 개발에 대해 아무것도 몰랐던 때가 있었습니다. 지금처럼 원하는 답을
            척척 알려주는 생성형 인공지능도 없었기에, 수개월 동안 혼자 책을
            구매하고 자료를 검색하며 코드를 작성하고 실행하면서 공부했습니다.
            때로는 마음처럼 작동하지 않는 코드를 붙잡고 며칠씩 밤늦게까지
            매달리기도 했습니다.
          </p>
          <p>
            그러던 어느 날, 집에 있던 구형 노트북과 데스크톱에서 실행한 백엔드와
            프론트엔드 서버가 서로 통신하며, 제가 만든 웹 페이지가 브라우저에
            처음으로 나타났습니다. 큰 성취감은 물론이고, '모르는 분야라도 스스로
            학습하면 충분히 해낼 수 있구나' 하는 자신감까지 얻을 수 있었습니다.
          </p>
          <h4>“빈자리가 키워준 책임감”</h4>
          <p>
            첫 직장은 규모가 작아 개발 환경부터 사용 도구까지 제가 직접 선택하고
            학습하며 프로젝트를 진행해야 했습니다. 처음 접하는 데이터베이스와
            다양한 오픈소스를 다뤄볼 수 있었고 실제 업무에 바로 투입이 되어 일을
            진행하며 성취감도 느꼈습니다.
          </p>
          <p>
            하지만 잦은 이직으로 인해 사수가 없는 상황은 큰 도전이었습니다.
            명확한 지시나 가이드 없이 업무를 스스로 파악하고 결정해야 했고, 그
            결과에 대한 책임도 온전히 제 몫이었습니다.
          </p>
          <p>
            개발자로서의 책임감은 단순히 내 업무를 끝내는 데 그치지 않는다는
            것을 깨달았습니다. 팀의 다른 구성원도 업무에 대해 잘 이해할 수
            있도록 정보와 진행 상황을 체계적으로 정리하는 것이 중요하다는 것을
            절실히 느꼈습니다. 혼자 일할 때는 생략할 수 있었던 기록과 정리가,
            팀에서는 너무나 중요하다는 점을 배운 경험이었습니다.
          </p>
          <h4>"과감하게 그리고 충실하게"</h4>
          <p>
            인테리어 중개 플랫폼 개발 프로젝트에서 저는 프로젝트 매니저 역할을
            맡았습니다. 주로 혼자서 개발을 해왔던 제게 팀과의 협업은 낯설고
            도전적인 경험이었습니다. 특히 팀원 간의 의견 충돌이나 코드 충돌을
            조정하고 해결하는 과정은 개인 작업과는 전혀 다른 어려움이었습니다.
          </p>
          <p>
            어떤 기능을 우선할지, 어떤 방식으로 구현할지에 대한 생각이 다를
            때마다 이를 절충하고 조율하는 데 많은 시간과 에너지가 들었습니다.
            이런 상황에서는 누군가 명확하게 방향을 결정해야 했고, 그 결정이 내
            의견과 다를지라도 업무의 흐름을 위해 충실히 따르는 것이 필요하다는
            사실을 배웠습니다. 이견을 조율하는 과정 못지않게, 결정 이후의 책임감
            있는 실행이 협업에서 얼마나 중요한지도 체감했습니다.
          </p>
          <p>
            개발 업무와 프로젝트 일정 관리, 팀원들의 진행 상황 파악까지 병행하는
            일은 쉽지 않았지만, 모든 일정에 책임감을 갖고 끝까지 참여하며
            프로젝트를 성공적으로 마무리했습니다. 협업의 복잡함과 어려움을 몸소
            겪으며, 그것을 극복해 함께 성과를 이루는 과정을 깊이 배울 수
            있었습니다.
          </p>
          <h4>“배움과 개발의 순환”</h4>
          <p>
            프로젝트를 완성하기 위한 기능 중심의 학습을 넘어, 이제는 아키텍처를
            깊이 이해하고 각 오픈소스를 선택하는 이유를 고민하며 학습하고
            있습니다. 이 과정에서 얻은 지식을 기술 블로그에 정리하며 오픈소스에
            대한 이해를 돕고, 활용할 수 있는 자산으로 만들고 있습니다.
          </p>
          <p>
            새롭게 참여한 팀 프로젝트는 물론, 개인 프로젝트에도 이 지식을
            적극적으로 적용하며 제가 배운 것을 실천하고 있습니다. 이렇게 배움을
            기록하고 적용하는 지속적인 과정을 통해, 개발자로서 더 복잡하고 의미
            있는 문제들을 해결해 나갈 준비를 하고 있습니다.
          </p>
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
          <br />
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
          <h2>Portfolio</h2>
          <ul dir="auto">
            <li>
              <label>2025.05 ~</label>
              <label>api.madness</label>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/nera1/api.madness"
                  >
                    Backend GitHub Repository
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://api.madn.es">
                    Link
                  </a>
                </li>
                <li>Spring Boot 웹소켓 채팅 어플리케이션 백엔드</li>
                <li>STOMP 프로토콜 기반 채팅 메세지 송수신</li>
                <li>JWT를 활용한 인증/인가</li>
                <li>Github Actions을 이용한 CI/CD 파이프라인</li>
              </ul>
              <label>madness</label>
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/nera1/madness">
                    Frontend GitHub Repository
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://madn.es">
                    Link
                  </a>
                </li>
                <li>Next.js 기반 웹소켓 채팅 어플리케이션 프론트엔드</li>
                <li>데스크탑/모바일 기기에 맞춘 반응형 웹</li>
                <li>
                  Github Actions, Github Pages를 사용하여 자동화된 정적 웹
                  페이지 호스팅
                </li>
              </ul>
            </li>
            <br />
            <li>
              <label>2024.07 ~ 2024.09</label>
              <label>Intarea</label>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/ekd594ff/jhta2402_final"
                  >
                    GitHub Repository
                  </a>
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
            <br />
            <li>
              <label>2024.04</label>
              <label>Sumr</label>
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/nera1/sumr">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://sumr.it">
                    Link
                  </a>
                </li>
                <li>GitHub Pages로 배포되는 개발 블로그</li>
                <li>
                  Next.js 의 SSG(Static Site Generation)기능을 활용하여 작성된
                  마크다운 파일을 블로그 포스트로 변환
                </li>
                <li>Github Actions을 이용한 자동화된 배포 파이프라인 구축</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default MyDocument;
