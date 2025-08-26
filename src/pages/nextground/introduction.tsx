"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/nextground-introduction.module.scss";

export interface LinkTagProps {
  href: string;
  tag: string;
  favicon?: string;
}

export type DividerWithDotProps = {
  dotColor?: string;
  dotSize?: string;
};

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

export const DividerWithDot: React.FC<DividerWithDotProps> = ({
  dotColor,
  dotSize,
}) => {
  return (
    <div className="flex justify-center my-4">
      <span
        style={{ color: dotColor, fontSize: dotSize }}
        className={`mx-2 !text-3xl`}
      >
        •
      </span>
    </div>
  );
};

const NextgroundIntroduction = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div className={styles["swing-introduction"]}>
      <section className={`${styles["info"]} flex gap-x-12 mb-10`}>
        <Avatar
          width={180}
          height={180}
          borderRadius={"12.5%"}
          offsetY={10}
          scale={1.26}
          backgroundColor="#fff"
        />
        <div className="flex flex-col justify-center gap-y-[5px]">
          <span className="text-lg font-bold mt-2">엄인용</span>
          <span className="text-base mt-1 font-medium text-neutral-600">
            백엔드 개발자
          </span>
          <ul className="pl-0 m-0 mt-1 text-neutral-500 text-sm">
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
      <h2 className="!text-2xl !my-5">
        더 나은 답을 찾기 위해
        <br /> 더 많은 시행착오를 겪습니다
      </h2>
      <section>
        <h4 className="!text-lg">
          채팅 웹 어플리케이션 WebSocket 통신 시 JWT 인증·인가
        </h4>
        <ul className="!text-base !gap-y-1">
          <li>
            Caffeine을 활용한 인가 정보 Cache로 WebSocket Handshake 이후의
            메세지 인가
          </li>
        </ul>
        <h4 className="!text-lg">실시간 채팅 참여 인원 집계</h4>
        <ul className="!text-base !gap-y-1">
          <li>
            인원 중복 집계를 막고, 장기간 접속이 없는 연결을 집계에서 제외하도록
            Cache 구조 재설계
          </li>
        </ul>
        <h4 className="!text-lg">채팅 채널명 검색 기능</h4>
        <ul className="!text-base !gap-y-1">
          <li>
            검색에 유용한 인덱스와 플러그인들을 테스트, 도입하여 검색
            엔드포인트의 응답시간 감소
          </li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>경력</h3>
      <section className={styles["career"]}>
        <ul className="!text-base">
          <li className="flex gap-x-2">
            <span className="font-bold">주식회사퓨쳐아이씨티(FutureICT)</span>
            <span className={`${styles["badge"]}`}>
              2021.12 ~ 2024.03 (2년 3개월)
            </span>
          </li>
          <li>
            Node-RED로 MQTT 메시지를 파싱, InfluxDB에 저장하고, Redis 캐시로
            MQTT 메시지 Topic을 필터링하는 플로우 구성
          </li>
          <li>Grafana를 활용한 InfluxDB 데이터 시각화</li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>기술 스택</h3>
      <section className={styles["skills"]}>
        <ul className="!text-base">
          <li className="flex gap-2">
            <span>Spring Boot</span>
            <span>JPA</span>
            <span>JAVA</span>
            <span>PostgreSQL</span>
          </li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>기타</h3>
      <section>
        <ul className="!text-base">
          <li className="flex gap-x-2">
            <span>건국대학교 컴퓨터공학과 졸업</span>
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>
        넥스트그라운드 지원
      </h3>
      <p className="!text-base">
        저는 어떤 플랫폼에서도 기능 제공만큼이나 사용자 커뮤니티를 형성하려는
        노력이 중요하다고 생각합니다.
      </p>
      <p className="!text-base">
        집품의 서비스는 거주 여부를 확인하고, 해당 살아본 사용자만 남길 수 있는
        차별화된 실거주 후기를 공유하고 있습니다.
      </p>
      <p className="!text-base">
        사용자 간 실거주경험을 제공하는 집품의 서비스에 매력을 느껴, 백엔드
        개발자로서 귀중한 가치를 공유하는 경험을 개선하고 발전시키는 데
        기여하고자 넥스트그라운드에 지원하였습니다.
      </p>
      <DividerWithDot dotColor="#3b5bdb" dotSize="96" />
      <p className="!text-base">
        기존의 기능을 개선하는 작업은 현재 시스템에 대한 명확한 이해에서
        시작됩니다.
      </p>
      <p className="!text-base">
        인수인계 없이 직접 데이터베이스의 테이블을 하나 하나 확인하고, 쌓이는
        데이터를 통해 시스템을 파악했던 첫 직장에서의 경험은 집품 서비스의
        구조를 이해하는데도 도움이 될 것입니다.
      </p>
      <p className="!text-base">
        웹 서버를 처음 공부하던 때 CORS 문제로 꼬박 일주일을 매달렸고, 그 경험이
        문제 해결을 위한 배움과 실행을 주저하지 않는 개발자로 성장하는 계기가
        되었습니다.
      </p>
      <p className="!text-base">
        시행착오를 멈추지 않는 개발자로 넥스트그라운드의 목표를 위한 몰입에
        끝까지 함께하겠습니다.
      </p>
    </div>
  </Template>
));

export default NextgroundIntroduction;
