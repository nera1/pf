"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
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

const SwingPortfolio = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div className={styles["swing-introduction"]}>
      <h1 className="text-xl m-0">Portfolio</h1>
      <section className={`${styles["portfolio"]}`}>
        <h2 className="text-lg m-0">Madness</h2>
        <ul>
          <li>
            <LinkTag
              href="https://madn.es"
              tag="Madness 배포 주소"
              favicon="https://madn.es/favicon.ico"
            />
          </li>
          <li>
            <LinkTag
              href="https://github.com/nera1/api.madness"
              tag="Madness Backend Repository"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
          <li>
            <LinkTag
              href="https://github.com/nera1/madness"
              tag="Madness Frontend Repository"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
        </ul>
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
    </div>
  </Template>
));

export default SwingPortfolio;
