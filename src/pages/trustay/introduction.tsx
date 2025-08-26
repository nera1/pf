"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/trustay-introduction.module.scss";

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

const TrustayIntroduction = forwardRef<TemplateRef>((_, ref) => (
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
            Caffeine을 활용한 인가 정보 캐시로 WebSocket Handshake 이후의 메시지
            인가
          </li>
        </ul>
        <h4 className="!text-lg">실시간 채팅 참여 인원 집계</h4>
        <ul className="!text-base !gap-y-1">
          <li>
            인원 중복 집계를 막고, 장기간 접속이 없는 연결을 집계에서 제외하도록
            캐시 구조 재설계
          </li>
        </ul>
        <h4 className="!text-lg">채팅 채널명 검색 기능</h4>
        <ul className="!text-base !gap-y-1">
          <li>
            검색에 유용한 인덱스와 플러그인들을 테스트, 도입하여 검색
            엔드포인트의 응답 시간 감소
          </li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>경력</h3>
      <section className={styles["career"]}>
        <ul className="!text-base">
          <li className="flex gap-x-2">
            <span className="font-bold">주식회사 퓨쳐아이씨티(FutureICT)</span>
            <span className={`${styles["badge"]}`}>
              2021.12 ~ 2024.03 (2년 3개월)
            </span>
          </li>
          <li>
            Node-RED로 MQTT 메시지를 파싱, InfluxDB에 저장하고, Redis 캐시로
            MQTT 메시지 Topic을 필터링하는 플로우 구성
          </li>
          <li>AWS EC2 인스턴스에서 실행되는 사내 시스템 관리</li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>기술 스택</h3>
      <section className={styles["skills"]}>
        <ul className="!text-base">
          <li className="flex gap-2">
            <span>Spring Boot</span>
            <span>JPA</span>
            <span>Java</span>
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
        트러스테이 지원
      </h3>
      <p className="!text-base">
        노크플레이스의 서비스를 보며 가끔 집 문고리에 걸려있던 책자가
        떠올랐습니다. 저희 가족은 그 책자를 '상가책'이라 불렀는데 인근의
        음식점부터 이삿짐센터, 세탁소까지 유용한 정보가 많아 모아두고 필요할
        때마다 유용하게 사용했던 기억이 있습니다.
      </p>
      <p>
        노크플레이스는 그 편리함을 오늘의 방식으로 확장한 서비스라고 느꼈습니다.
        더 뛰어난 접근성과 다양한 기능으로 입주민과 단지 안팎의 업체를
        연결합니다.
      </p>
      <p>
        이러한 연결이 지역 상권에 긍정적인 활력을 불어넣고, 입주민의 생활 반경을
        넓힌다는 점에 깊은 인상을 받아 백엔드 개발자로서 라이프스타일을
        향상시키는 노크플레이스 서비스에 기여할 수 있다는 기대감으로
        트러스테이에 트러스테이에 지원하게 되었습니다.
      </p>
      <DividerWithDot dotColor="rgb(98, 127, 234)" dotSize="96" />
      <p className="!text-base">
        첫 직장에서 인수인계 없이 선임들이 이직·퇴사하며 사내 시스템을 혼자 맡게
        됐습니다. 데이터베이스 테이블을 하나하나 확인하며 구조를 파악했고, 그
        결과 사내 시스템의 유지보수는 물론 고객사에 시스템을 납품할 수 있게
        되었습니다.
      </p>
      <p>
        부담감이 책임감으로 이어진 이 경험은 고객 문제를 끝까지 해결하려는
        마이리얼트립의 태도와 맞닿아 있습니다.
      </p>
      <p className="!text-base">
        웹 애플리케이션을 개발하며 백엔드는 물론 필요한 프론트엔드 기술까지
        익혔습니다. 수많은 시행착오를 겪으며 기른 개발자로서의 지구력은
        마이리얼트립의 빠른 실행에 맞춰 새로운 기술을 신속히 학습하고 적용하는
        데 큰 도움이 될 것입니다.
      </p>
      <p className="!text-base">
        문제에 대한 책임감을 바탕으로 시행착오를 두려워하지 않는 백엔드
        개발자로서, 마이리얼트립의 고객 경험 개선에 기여하겠습니다.
      </p>
    </div>
  </Template>
));

export default TrustayIntroduction;
