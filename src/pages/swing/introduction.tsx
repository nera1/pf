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
      <section className={`${styles["info"]} flex gap-x-12`}>
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
        <h2 className="text-lg m-0">Introduction</h2>
        <h3 className="text-md">시행착오 속에서 길을 찾아내는 개발자</h3>
        <p>
          백엔드, 프론트엔드, 인프라까지 웹 애플리케이션을 위한 기술이라면
          무엇이든 적극적으로 학습합니다.
        </p>
        <p>
          주어진 어떠한 문제라도 시행착오 속에서 스스로 답을 찾아 해결할 수
          있다는 자신감이 있습니다.
        </p>
        <h3 className="text-md">부담감에서 책임감을 이끌어내는 개발자</h3>
        <p>
          첫 직장에서 선임자들이 모두 떠난 상황에서 기존 코드를 유지·보수하고
          서버 납품을 맡은 경험이 있습니다.
        </p>
        <p>
          이 경험을 통해 어떤 어려운 상황에서도 맡은 일을 끝까지 완수하는
          개발자로 성장할 수 있었습니다.
        </p>
        <h3 className="text-md">관심이 곧 협업이라 믿는 개발자</h3>
        <p>
          부트캠프 최종 프로젝트에서 쏟아지는 문제들 속에서 단순한 업무 분담과
          협업은 전혀 다르다는 것을 깨닫고, 하루에 최소 한 번의 미팅을 통해
          서로의 진척도를 확인하고 어려움을 공유하며 문제를 해결했습니다.
        </p>
        <p>
          관심은 관여로, 관여는 결과로 이어지기에 자신의 코드에만 빠져있는
          개발자가 되지 않기 위해 노력합니다.
        </p>
      </section>
      <h2>Skills</h2>
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
            간단한 프론트엔드 웹 애플리케이션을 직접 개발할 수 있으며,
            Javascript, Typescript를 활용한 Backend API 통신, 상태관리를 통한
            동적 UI를 만들 수 있습니다.
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
            AWS EC2 환경에서 Mosquitto, Node-RED, InfluxDB, Grafana 기반의 IoT
            데이터 수집 시스템을 운영하고 개발하였습니다.
          </li>
          <li>
            Javascript 언어로 Node-RED에 MQTT 메세지 파싱 플로우를
            개발하였습니다.
          </li>
          <li>
            PostgreSQL 장비 정보 테이블을 Redis 캐싱하여 100~200대의 LTE
            라우터에서 전송하는 센서 데이터를 필터링하는 Node-RED 플로우를
            개발하였습니다.
          </li>
          <li>
            InfluxDB에 수집된 센서 데이터 및, LTE 라우터의 네트워크 성능
            지표(RSRP, SINR, TX/RX 등)를 InfluxDB에 수집하고 Grafana를 통해
            시각화하였습니다.
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
    <div className={styles["swing-introduction"]}>
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
  </Template>
));

export default SwingIntroduction;
