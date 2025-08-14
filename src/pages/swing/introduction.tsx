"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/swing-introduction.module.scss";

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

const SwingIntroduction = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div className={styles["swing-introduction"]}>
      <section className={`${styles["info"]} flex gap-x-12 mb-5`}>
        <Avatar width={180} height={180} borderRadius={"6.25%"} />
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
        <h2 className="text-lg m-0">My Story</h2>
        <h3 className="text-md">방향을 몰라도, 스스로 길을 찾아내다</h3>
        <p>
          저는 컴퓨터 공학을 전공했지만, 웹 개발 분야에 대해서는 거의 알지 못한
          채로 출발했습니다. 웹페이지가 HTML, JS, CSS로 구성된다는 등 기본적인
          정보를 바탕으로 무작정 책을 사서 따라 하며 공부를 시작했습니다.
        </p>
        <p>
          웹페이지를 다른 사용자들도 볼 수 있도록 하려면 서버와 데이터베이스가
          필요하다는 사실을 깨닫고, Node.js와 관계형 데이터베이스를
          학습했습니다. 이후 사용자 편의성을 높이고자 프론트엔드 기술을
          익혔으며, 유지보수와 확장성을 위해 안정적인 프레임워크인 Spring
          Boot까지 학습했습니다.
        </p>
        <p>
          스스로 목표를 찾고, 필요에 따라 학습을 주도적으로 진행한 덕분에 저는
          웹 어플리케이션의 전반적인 구조와 개발부터 배포까지 모든 단계를 스스로
          익히게 되었으며, 주어진 어떠한 문제라도 스스로 그 답을 찾아 해결 할 수
          있다는 자신감을 얻게 되었습니다.
        </p>
        <h3 className="text-md">홀로 견딘 부담이 개발자의 책임감으로</h3>
        <p>
          작은 규모의 첫 직장은 업무에 대한 명확한 설명이나 지원이 부족한
          환경이었습니다. 입사 직후 업무에 대한 인수인계도 제대로 받지 못한 채
          얼마 안 되는 선임자들마저 퇴사와 이직으로 모두 떠나고 말았습니다. 결국
          저는 혼자 남아 기존 코드의 유지보수뿐 아니라 신규 사업을 위한
          프로젝트까지 맡게 되었습니다. 입사 초기였던 제게는 버거운
          도전이었습니다.
        </p>
        <p>
          막막한 상황이었지만, 저는 책임감을 갖고 주어진 일을 끝까지 해내기로
          결심했습니다. 혼자서 학습하고 수많은 시행착오를 반복하며, 결국 기한
          내에 정상적으로 작동하는 애플리케이션을 만들어 성공적으로
          납품했습니다. 이 경험을 통해 저는 어떤 어려운 상황에서도 맡은 일을
          끝까지 완수하는 개발자로 성장할 수 있었습니다.
        </p>
        <h3 className="text-md">최적이 최선이 아니었다</h3>
        <p>
          부트캠프에서 프로젝트를 진행할 당시, 다른 팀과 차별화를 두기 위해
          React를 도입하자고 제안했고, 팀원들을 설득해 함께 학습하고
          적용했습니다. 다행히 팀원들의 노력 덕분에 기한 내에 무사히 완성하고
          배포까지 할 수 있었지만, 익숙하지 않은 기술을 익히느라 팀원들이 많은
          부담을 느꼈다는 점도 뒤늦게 깨달았습니다.
        </p>
        <p>
          이 경험을 통해, 최적의 기술을 고르는 것도 중요하지만, 팀이 무리 없이
          함께 나아갈 수 있는 방향을 먼저 고려하는 것이 더 나은 결과로
          이어진다는 중요한 교훈을 얻었습니다.
        </p>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h2>Skills</h2>
      <section className={styles["skills"]}>
        <h3 className="text-md">Spring Boot, JPA, JAVA</h3>
        <ul>
          <li>
            Spring Boot 기반의 RESTful API를 직접 설계하고 구현해 본 경험이
            있으며, RDBMS와 연동하여 CRUD 및 웹소켓 비즈니스 로직을 처리해 본
            경험이 있습니다.
          </li>
          <li>
            Spring Security를 사용해 JWT 기반의 인증 및 인가 기능을 구현할 수
            있습니다
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
            간단한 프론트엔드 웹 애플리케이션을 직접 개발할 수 있으며, 백엔드
            API와의 통신 및 상태 관리를 활용한 동적인 UI 구현이 가능합니다.
          </li>
          <li>
            JavaScript/TypeScript의 비동기 처리에 대한 이해를 바탕으로, 사용자
            경험을 고려한 비동기 로직을 구현할 수 있습니다.
          </li>
        </ul>
      </section>
      <h2>Certificate</h2>
      <section className={styles["certificate"]}>
        <ul>
          <li>
            정보처리기사 <span className={styles["badge"]}>2024.09</span>
          </li>
        </ul>
      </section>
      <h2>Education</h2>
      <section className={styles["certificate"]}>
        <ul>
          <li>
            건국대학교 컴퓨터공학과 졸업{" "}
            <span className={styles["badge"]}>2020.02</span>
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h2>Career</h2>
      <section className={styles["career"]}>
        <h3 className="text-md">주식회사퓨쳐아이씨티(FutureICT)</h3>
        <span className={styles["badge"]}>2021.12 - 2024.03</span>
        <ul>
          <li>
            IoT 엣지 디바이스인 LTE 라우터에서 송신하는 데이터를 MQTT 프로토콜을
            통해 수집하고, 이를 Mosquitto 브로커로 받은 뒤 Node-RED로 파싱 및
            가공해 시계열 데이터베이스인 InfluxDB에 저장하는 일련의 데이터 수집
            파이프라인을 구성하였습니다
          </li>
          <li>
            등록된 라우터의 데이터만을 수집할 수 있도록 PostgreSQL에 저장된
            라우터 정보를 Redis에 캐싱하여 MQTT 메세지의 topic과 payload를
            필터링하는 Node-red 플로우를 제작하였습니다
          </li>
        </ul>
      </section>
      <h2>Project</h2>
      <section className={styles["project"]}>
        <h3 className="text-md">Madness(실시간 웹소켓 채팅 어플리케이션)</h3>
        <span className={styles["badge"]}>2025.02 ~ </span>
        <ul>
          <li>
            Backend
            <ul>
              <li>
                Spring Boot 3.4, Spring WebSocket(STOMP)/SockJS 기반 채팅 서버
                개발
              </li>
              <li>WebSocket 연결 시 JWT 인증 처리 기능 구현</li>
              <li>Caffeine 캐시를 활용한 인가 및 조회수 집계 기능 개발</li>
            </ul>
          </li>
          <li>
            FrontEnd
            <ul>
              <li>Next.js 13, Github Pages를 사용한 프론트엔드 페이지 배포</li>
              <li>
                SockJS-STOMP 클라이언트 연동해 실시간 메시징, 재연결 및 오류
                핸들링 처리
              </li>
            </ul>
          </li>
          <li>
            Cloud & CI/CD
            <ul>
              <li>
                Cloudtype에 백엔드 배포, Supabase로 PostgreSQL 호스팅 환경 구성
              </li>
              <li>
                GitHub Actions 워크플로우로 백엔드, 프론트엔드 빌드·배포 자동화
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </Template>
));

export default SwingIntroduction;
