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
      <h2 className="!text-2xl !my-12">
        더 나은 답을 찾기 위해
        <br /> 더 많은 시행착오를 겪습니다
      </h2>
      <section>
        <h4 className="!text-lg">
          채팅 웹 어플리케이션 WebSocket 통신 시 JWT 인증·인가
        </h4>
        <ul className="!text-base !gap-y-1">
          <li>
            채팅 채널에 참여한 인원만 메시지 송수신 할 수 있도록 위해 메시지에
            대한 JWT 인가 필요
          </li>
          <li>
            Caffeine을 통해 인가 정보를 Cache하여 ChannelInterceptor에서 인가
          </li>
        </ul>
        <h4 className="!text-lg">실시간 채팅 참여 인원 중복 집계 문제 해결</h4>
        <ul className="!text-base !gap-y-1">
          <li>Cache 구조를 3번 재설계 한 끝에 중복 집계를 막는 구조를 발견</li>
          <li>
            인원 중복 집계를 막는것은 물론 장기간 접속이 없는 연결을 집계에서
            제외하는데도 효율적
          </li>
        </ul>
        <h4 className="!text-lg">채팅 채널명 검색 성능 개선</h4>
        <ul className="!text-base !gap-y-1">
          <li>부분검색에 유용한 인덱스와 플러그인들을 테스트하고 도입</li>
          <li>검색 엔드포인트의 응답시간 감소</li>
        </ul>
      </section>
      <h3 className="!text-xl !mt-11">기술 스택</h3>
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
      <h3 className="!text-xl !mt-11">기타</h3>
      <section>
        <ul className="!text-base">
          <li className="flex gap-x-2">
            <span>건국대학교 컴퓨터공학</span>
            <span className={styles["badge"]}>2020.02</span>
          </li>
          <li className="flex gap-x-2">
            <span>정보처리기사</span>
            <span className={styles["badge"]}>2020.02</span>
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h3 className="!text-xl !mt-11">넥스트그라운드 지원</h3>
      <p className="!text-lg">
        저는 어떤 플랫폼에서도 기능 제공만큼이나 사용자 커뮤니티를 형성하려는
        노력이 중요하다고 생각합니다.
      </p>
      <p className="!text-lg">
        집품의 서비스는 거주 여부를 확인하고, 해당 살아본 사용자만 남길 수 있는
        차별화된 실거주 후기를 공유하고 있습니다.
      </p>
      <p className="!text-lg">
        사용자 간 실거주경험을 제공하는 집품의 서비스에 매력을 느껴, 백엔드
        개발자로서 귀중한 가치를 공유하는 경험을 개선하고 발전시키는 데
        기여하고자 넥스트그라운드에 지원하였습니다.
      </p>
      <hr />
      <p className="!text-lg">
        집품의 거주 후기 서비스를 직접 사용하며 후기 작성 단계에서 입력되는
        ‘장점·단점 키워드’를 더 폭넓게 활용할 수 있겠다 생각했습니다.
      </p>
      <p className="!text-lg">
        집을 고를 때 ‘위치’가 정해지면, 개인이 중요하게 보는 키워드(대중교통,
        소음 등)에 따라 선택이 달라집니다. 그래서 위치 조건에 키워드 정보를
        결합해 검색에 활용할 수 있다면 개인에게 맞춤화된 매물 검색 결과를 제공할
        수 있다고 생각합니다.
      </p>
      <p className="!text-lg">
        기존의 기능을 확장하는 데는 많은 실험과 테스트가 필요하겠지만, 더 나은
        시스템을 위해 개선해 온 제 경험을 바탕으로 넥스트그라운드의 성장에
        동참하고자 합니다.
      </p>
    </div>
  </Template>
));

export default NextgroundIntroduction;
