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

const NextgroundIntroduction = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div className={styles["swing-introduction"]}>
      <section className={`${styles["info"]} flex gap-x-12 mb-10`}>
        <Avatar
          width={160}
          height={160}
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
      <h2 className="!text-2xl">
        더 나은 답을 찾기 위해
        <br /> 더 많은 시행착오를 겪습니다
      </h2>
      <section>
        <h4 className="!text-lg">
          채팅 웹 어플리케이션 WebSocket 통신 시 JWT 인증·인가
        </h4>
        <ul className="!text-base !gap-y-1">
          <li>
            Websocket Handshake 단계 뿐만 아니라 SUBSCRIBE, SEND 메세지까지 JWT
            인가 필요
          </li>
          <li>Redis가 아닌 Caffeine을 사용하여 인가 정보를 Cache하여 해결</li>
        </ul>
        <h4 className="!text-lg">실시간 채팅 참여 인원 중복 집계 문제 해결</h4>
        <ul className="!text-base !gap-y-1">
          <li>
            Cache 구조를 3번이나 재설계 한 끝에 중복 집계를 막는 구조를 발견
          </li>
          <li>
            인원 중복 집계를 막는것은 물론 장기간 접속이 없는 연결을 집계에서
            제외하는데도 효율적
          </li>
        </ul>
        <h4 className="!text-lg">채팅 채널명 검색 성능 개선</h4>
        <ul className="!text-base !gap-y-1">
          <li>LIKE 부분일치 검색 시 기존의 B-Tree 인덱스는 성능이 좋지 못함</li>
          <li>
            부분검색에 유용한 인덱스와 플러그인들을 테스트하고 도입하여 검색
            성능을 개선
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}></div>
  </Template>
));

export default NextgroundIntroduction;
