"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/ably-introduction.module.scss";

export interface LinkTagProps {
  href: string;
  tag: string;
  favicon?: string;
}

export const LinkTag: React.FC<LinkTagProps> = ({ href, tag, favicon }) => (
  <label className="ml-[8px] flex gap-x-1 items-center">
    {favicon && (
      <img
        style={{ width: "20px", height: "20px" }}
        src={favicon}
        alt={`${tag} icon`}
      />
    )}
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {tag}
    </a>
  </label>
);

const AblyIntroduction = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div className={styles["swing-introduction"]}>
      <section className={`${styles["info"]} flex gap-x-12`}>
        <Avatar
          width={180}
          height={180}
          borderRadius={"12.5%"}
          offsetY={10}
          scale={1.26}
        />
        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-xl font-bold">엄인용</span>
          <span className="text-md mt-1 font-medium text-neutral-600">
            백엔드 개발자
          </span>
          <ul className="pl-0 m-0 mt-1 text-neutral-500">
            <li>
              Blog.
              <LinkTag
                href="https://sumr.it"
                favicon="https://sumr.it/favicon.ico"
                tag="sumr"
              />
            </li>
            <li>
              Github.
              <LinkTag
                href="https://github.com/nera1"
                tag="Nera"
                favicon="https://github.githubassets.com/favicons/favicon.svg"
              />
            </li>
            <li>
              Email.
              <LinkTag
                href="mailto:nera4936@gmail.com"
                tag="nera4936@gmail.com"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles["story"]}`}>
        <h2 className="text-lg">소개</h2>
        <h3 className="text-md">설득이 곧 협업이라 믿습니다</h3>
        <p>
          부트캠프 최종 프로젝트에서 템플릿 엔진만으로는 동적 UI를 기한 내
          구현하기 어렵다는 문제를 팀과 공유하고, React 도입을 제안했습니다.
          팀원들이 학습 부담을 걱정하자 단기간 도입이 가능함을 설득하였고 어려운
          부분은 함께 해결하며 프로젝트를 진행하였습니다.
        </p>
        <p>
          팀원이 모두 노력한 결과 다른 팀과 차별화된 UI로 기한 내 개발·배포를
          마쳤으며 동시에 프로젝트 방향을 정할 때 팀원을 설득하고 합의하는
          과정의 어려움과 중요성 역시 실감하게되었습니다.
        </p>
        <h3 className="text-md">시행착오 속에서 길을 찾습니다</h3>
        <p>
          개인 프로젝트에서 실시간 참여자 집계 과정에서 중복 집계 문제가
          발생했습니다. 이를 해결하고자 캐시 구조를 설계·검증하며 개선을 반복한
          결과, 중복 집계를 막는 효과적인 구조를 찾을 수 있게 되었습니다.
        </p>
        <p>
          한 번에 정답을 찾기보다 작은 실험을 거듭한 과정이 더 큰 개선을
          이끌어낼 수 있음을 깨달은 경험이었습니다.
        </p>
        <h3 className="text-md">멈추지 않고 배워나갑니다</h3>
        <p>
          백엔드와 프론트엔드가 무엇인지도 몰랐던 시절, HTML·CSS·JavaScript부터
          시작해 웹 애플리케이션을 만드는 전 과정을 스스로 익혔습니다. 개발부터
          배포까지 모든 단계를 익혀야 한다는 부담이 컸지만, 포기하지 않고 하나씩
          배우며 끝내 구현과 배포를 마쳤습니다.
        </p>
        <p>
          러닝 커브 앞에서도 멈추지 않고 도전한 시간들이, 지금까지도 개발자로서
          계속 배우고 성장하는 제 지구력을 길러 주었습니다.
        </p>
      </section>
      <br />
      <h2>지원동기</h2>
      <p>
        에이블리는 단순한 상품 판매 서비스가 아니라 셀러를 창출하는
        플랫폼입니다. 셀러가 겪는 기술적 장벽을 낮추고 그들의 고민을 에이블리의
        개발자로서 이해하고 해결하며, 셀러와 플랫폼이 각자의 강점에 집중하여 더
        나은 커뮤니티를 만드는 일에 기여할 수 있다는 기대감으로 에이블리 백엔드
        개발자에 지원하게 되었습니다.
      </p>
      <section className={styles["motivation-vision"]}></section>
    </div>
    <div className={`${styles["swing-introduction"]} !mb-0 !pb-0`}>
      <h2>기술</h2>
      <section className={styles["skills"]}>
        <h3 className="text-md">Spring Boot, Spring Security, JPA, JAVA</h3>
        <ul>
          <li>
            Spring Boot, JPA를 활용한 RESTful API를 직접 설계하고 WebSocket을
            적용한 경험이 있습니다.
          </li>
          <li>
            Spring Security를 사용해 JWT 기반의 인증 및 인가 기능을 구현할 수
            있습니다.
          </li>
        </ul>
        <h3 className="text-md">MySQL, MariaDB, PostgreSQL</h3>
        <ul>
          <li>
            트랜잭션 처리, 인덱스 설계, 정규화 등을 고려한 테이블을 설계할 수
            있습니다.
          </li>
        </ul>
        <h3 className="text-md">React, Javascript, Typescript</h3>
        <ul>
          <li>
            Javascript, Typescript의 비동기적 언어의 특성을 이해하고, 간단한
            프론트엔드 웹 애플리케이션을 직접 개발할 수 있습니다.
          </li>
          <li>
            Backend API 통신 (AJAX), 프론트엔드의 상태관리를 통해 동적 UI를 만들
            수 있습니다.
          </li>
        </ul>
      </section>
      <h2>경력</h2>
      <section className={styles["career"]}>
        <h3 className="text-md">주식회사퓨쳐아이씨티(FutureICT)</h3>
        <div className="flex gap-x-3 !text-[15px]">
          <span className={styles["badge"]}>2021.12 ~ 2024.03</span>
        </div>
        <ul className="!pb-0 !mb-0">
          <li>
            AWS 환경에서 운영하는 사내 시스템을 유지·보수하였습니다.
            <ul>
              <li>
                EC2 인스턴스에서 실행되는 Node-RED, InfluxDB, Grafana로 구성된
                사내 시스템이 실행되는 EC2 인스턴스를 관리하였습니다.
              </li>
              <li>
                Node-RED에 Javascript 언어로 MQTT 메시지 파싱 플로우를
                개발하였습니다.
              </li>
            </ul>
          </li>
          <li>
            사내 시스템을 개선하고 편의 기능을 개발하였습니다.
            <ul>
              <li>
                지원이 끝난 장비, 정보가 바뀐 장비의 데이터를 제대로 필터링 하지
                못하는 문제가 발생
                <ul>
                  <li>
                    PostgreSQL 장비 정보 테이블을 Redis 캐싱하여 약 200대의 LTE
                    라우터에서 전송하는 센서 데이터를 필터링하는 Node-RED
                    플로우를 개발하였습니다.
                  </li>
                  <li>
                    장비 정보 추가, 업데이트, 삭제 시 Redis 캐시도 함께
                    변경하도록 Node-RED 플로우를 개선하였습니다.
                  </li>
                </ul>
              </li>
              <li>
                InfluxDB의 데이터를 Grafana 패널을 통해 시각화하고, 장비 추가,
                삭제 및 정보 변경작업을 진행하는 Grafana의 패널을 React로
                구성하였습니다.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h2>프로젝트</h2>
      <section className={styles["project"]}>
        <h3 className="text-md">Madness(실시간 웹소켓 채팅 어플리케이션)</h3>
        <div className="flex gap-x-3 !text-[15px]">
          <span className={styles["badge"]}>2025.02 ~ </span>
          <span>1인 개발</span>
        </div>
        <ul>
          <li>
            Spring Boot, WebSocket 기반 채팅 어플리케이션 프로젝트 (포트폴리오
            참조)
          </li>
        </ul>
        <h3 className="text-md">Intarea(인테리어 중개 플랫폼)</h3>
        <div className="flex gap-x-3 !text-[15px]">
          <span className={styles["badge"]}>2024.08 ~ 2024.09</span>
          <span>5인 개발</span>
        </div>
        <ul>
          <li className="flex gap-x-1">
            Spring Boot, JPA 기반 부트캠프 프로젝트
            <LinkTag
              href="https://github.com/ekd594ff/jhta2402_final?tab=readme-ov-file"
              tag="Intarea Github Repository"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
          <li>
            프로젝트 팀장으로서 코드 충돌 문제와 연쇄적인 개발 지연 문제를
            해결하였습니다.
            <ul>
              <li>
                매일 한번 이상의 미팅에서 문제점을 공유하고 팀원과 코드 병합을
                함께 진행했습니다.
              </li>
              <li>
                개발 일정을 Notion으로 공유하여, 서로의 진행 상황을 파악할 수
                있게 하였습니다.
                <ul className="!pl-0">
                  <li>
                    <LinkTag
                      href="https://phase-rail-b25.notion.site/JHTA-2402-1-Final-60254b8037b44088857305189c6eb412"
                      tag="Intarea 프로젝트 일정관리 Notion"
                      favicon="https://www.notion.com/front-static/favicon.ico"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <br />
      <h2>기타</h2>
      <section className={styles["others"]}>
        <h3 className="text-md">자격증</h3>
        <ul>
          <li className="flex gap-x-3 !text-[15px]">
            <span>정보처리기사</span>
            <span className={styles["badge"]}>2024.09</span>
          </li>
        </ul>
        <h3 className="text-md">교육</h3>
        <ul>
          <li className="flex gap-x-3 !text-[15px]">
            <span>건국대학교 컴퓨터공학과 졸업</span>
            <span className={styles["badge"]}>2020.02</span>
          </li>
        </ul>
      </section>
    </div>
  </Template>
));

export default AblyIntroduction;
