"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/postype-introduction.module.scss";

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

const PostypeIntroduction = forwardRef<TemplateRef>((_, ref) => (
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
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>Introduction</h3>
      <section className={`${styles["introduction"]}`}>
        <p className="!text-base !mb-1">
          시행착오 속에서 더 나은 해결책을 찾아가는 과정을 즐기는 백엔드
          개발자입니다.
        </p>
        <p>
          문제가 발생한 부분의 구조를 깊이 이해한 후, 그에 맞는 해결 방법을
          도출합니다
        </p>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>Experience</h3>
      <section className={styles["experience"]}>
        <ul className="!text-base">
          <li className="flex gap-x-2">
            <span className="font-bold">주식회사 퓨쳐아이씨티(FutureICT)</span>
            <span className={`${styles["badge"]}`}>
              2021.12 ~ 2024.03 (2년 3개월)
            </span>
          </li>
          <li>Node-RED, Javascript, Grafana</li>
          <li>
            PostgreSQL 데이터 변경 후 Redis 캐시를 통한 Node-RED의 MQTT 메세지
            필터링이 제대로 되지 않는 이슈
            <ul className="!text-base">
              <li>
                Node-RED가 PostgreSQL과 Redis를 비동기 처리 시, DB 커밋이
                확정되기 전에 캐시가 갱신되는 경우가 간헐적으로 발생함을 확인
              </li>
              <li>
                DB 커밋 성공 확인 후에만 Redis 캐시를 업데이트하도록 플로우 수정
              </li>
            </ul>
          </li>
          <li className="!text-base">InfluxDB 데이터 Grafana 시각화</li>
          <li className="!text-base">
            Grafana 패널에 장비정보 리스트, 검색 및 수정이 가능한 UI 제작
          </li>
        </ul>
      </section>
      <h3 className={`${styles["primary"]} !text-xl !mt-11`}>Project</h3>
      <section className={styles["project"]}>
        <ul className="!text-base">
          <li className="flex gap-2">
            <span>Spring Boot</span>
            <span>Java</span>
            <span>JPA</span>
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
        대부분의 부동산 플랫폼은 매물 노출과 선택지 확대에 집중합니다. 반면
        집품은 주거 경험에 초점을 맞춥니다. 아파트뿐 아니라 빌라·원룸 등 다양한
        주거 형태에 대해 실거주 여부가 확인된 후기를 제공해, 계약 전에 나에게
        맞는 집을 판단할 수 있게 돕습니다.
      </p>
      <p className="!text-base">
        저는 개발자가 기술적 문제 해결을 넘어 사회적 불편을 줄이는 데 기여하기
        위해 끊임없이 노력해야 한다고 생각합니다.
      </p>
      <p className="!text-base">
        너무나 중요하지만 누구도 쉽게 풀지 못했던 부동산 정보의 비대칭을 기술로
        해소하려는 넥스트그라운드의 노력에 공감하며, 넥스트그라운드의 문제
        해결을 위한 치열한 도전에 함께하고자 백엔드 개발자로 지원하였습니다.
      </p>
      <DividerWithDot dotColor="#3b5bdb" dotSize="96" />
      <p className="!text-base">
        기존의 기능과 구조를 개선하는 작업은 현재 시스템에 대한 명확한 이해에서
        시작됩니다.
      </p>
      <p className="!text-base">
        인수인계 없이 직접 데이터베이스의 테이블을 하나하나 확인하고, 쌓이는
        데이터를 통해 시스템을 파악했던 첫 직장에서의 경험은 처음 접한 집품
        서비스를 이해하는 데 큰 도움이 될 것입니다.
      </p>
      <p className="!text-base">
        웹 서버를 처음 공부하던 때 CORS 문제로 꼬박 일주일을 매달렸고, 그 경험이
        문제 해결을 위한 배움과 실행을 주저하지 않는 개발자로 성장하는 계기가
        되었습니다.
      </p>
      <p className="!text-base">
        더 나은 서비스를 위한 시행착오를 멈추지 않는 개발자로 넥스트그라운드의
        목표를 위한 몰입에 끝까지 함께하겠습니다.
      </p>
    </div>
  </Template>
));

export default PostypeIntroduction;
