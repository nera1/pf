"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import Avatar from "@/components/avatar";
import styles from "@/styles/aptner-introduction.module.scss";

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

const AptnerIntroduction = forwardRef<TemplateRef>((_, ref) => (
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
        <h2 className="text-lg">Introduction</h2>
        <h3 className="text-md">시행착오 속에서 길을 찾습니다</h3>
        <p>
          백엔드, 프론트엔드, 인프라까지 웹 애플리케이션을 위한 기술이라면
          무엇이든 적극적으로 학습합니다.
        </p>
        <p>
          주어진 어떠한 문제라도 시행착오 속에서 스스로 답을 찾아 해결할 수
          있다는 자신감이 있습니다.
        </p>
        <h3 className="text-md">부담감에서 책임감을 이끌어냅니다</h3>
        <p>
          첫 직장에서 선임자들이 모두 떠난 상황에서 기존 코드를 유지·보수하고
          서버 납품을 맡은 경험이 있습니다.
        </p>
        <p>
          이 경험을 통해 어떤 어려운 상황에서도 맡은 일을 끝까지 완수하는
          개발자로 성장할 수 있었습니다.
        </p>
        <h3 className="text-md">관심이 곧 협업이라 믿습니다</h3>
        <p>
          부트캠프 최종 프로젝트에서 쏟아지는 문제들 속에서 단순한 업무 분담과
          협업은 전혀 다르다는 것을 깨닫고, 하루에 최소 한 번의 미팅을 통해
          서로의 진척도를 확인하고 어려움을 공유하며 문제를 해결했습니다.
        </p>
        <p>
          관심은 관여로, 관여는 결과로 이어지기에 팀원과 팀원의 코드에 늘 주의를
          기울이려 노력합니다.
        </p>
      </section>
      <br />
      <h2>Motivation & Vision</h2>
      <section className={styles["motivation-vision"]}>
        <p>
          국내 모빌리티 기업들이 숙박·대리운전 등 모빌리티의 주변 영역까지
          사업을 확장하며 이동 전반에 대한 가치를 추구하고 있지만, 때로는 해당
          기업이 추구하는 바가 명확하지 않아 보였습니다.
        </p>
        <p>
          반면 더 스윙은 서울 패스, 전기 바이크·자전거 등 다양한 서비스가 자가용
          의존도를 낮춰 ‘차를 위한 도시를 사람을 위한 도시로’라는 비전으로
          수렴하고 있다고 느꼈습니다. 이 명확한 비전과 실행력에 끌려, 백엔드
          개발자로 그 비전에 기여하고자 지원하였습니다.
        </p>
        <p>
          웹 개발을 전혀 몰랐던 때부터 HTML·CSS·JavaScript로 시작해, 책 속
          코드를 따라 하고 수없이 시행착오를 겪으며 개발자로서 끝까지 해내는
          지구력을 키웠습니다. 실패해도 포기하지 않는 이 지구력으로로 스윙의
          빠르고 다양한 시도에 꾸준히 발맞추겠습니다.
        </p>
      </section>
    </div>
    <div className={`${styles["swing-introduction"]} !mb-0 !pb-0`}>
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
            Javascript, Typescript의 비동기적 언어의 특성을 이해하고, 간단한
            프론트엔드 웹 애플리케이션을 직접 개발할 수 있습니다.
          </li>
          <li>
            Backend API 통신 및(AJAX), 프론트엔드의 상태관리를 통해 동적 UI를
            만들 수 있습니다.
          </li>
        </ul>
      </section>
      <br />
      <h2>Career</h2>
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
                Node-RED에 Javascript언어로 MQTT 메세지 파싱 플로우를
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
                    장비 정보 추가, 업데이트, 삭제 시 Redis Cache도 함께
                    변경하도록 Node-RED 플로우를 개선하였습니다.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
    <div className={styles["swing-introduction"]}>
      <h2>Project</h2>
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
              tag="Intarea Github Respository"
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
      <h2>Others</h2>
      <section className={styles["others"]}>
        <h3 className="text-md">Certificate</h3>
        <ul>
          <li className="flex gap-x-3 !text-[15px]">
            <span>정보처리기사</span>
            <span className={styles["badge"]}>2024.09</span>
          </li>
        </ul>
        <h3 className="text-md">Education</h3>
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

export default AptnerIntroduction;
