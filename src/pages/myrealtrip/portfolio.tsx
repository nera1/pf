"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";
import styles from "@/styles/myrealtrip-introduction.module.scss";

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

const MyrealtripPortfolio = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <div
      className={`${styles["swing-introduction"]} ${styles["swing-portfolio"]}`}
    >
      <section className={`${styles["portfolio"]}`}>
        <h2>[웹소켓 기반 실시간 채팅 웹 애플리케이션] Madness</h2>
        <h3 className="flex gap-x-2">
          <span>1인 개발</span>
        </h3>
        <h3 className="flex gap-x-2">
          <span>2025.02 ~</span>
          <span>개발 중</span>
        </h3>
        <ul>
          <li>
            <LinkTag
              href="https://madn.es"
              tag="Madness 서비스 주소"
              favicon="https://madn.es/favicon.ico"
            />
          </li>
          <li>
            <LinkTag
              href="https://github.com/nera1/api.madness"
              tag="Madness Backend GitHub Repository"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
          <li>
            <LinkTag
              href="https://github.com/nera1/madness"
              tag="Madness Frontend GitHub Repository"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
        </ul>
        <h3>사용 기술</h3>
        <ul>
          <li className="flex gap-x-2">
            <span>Spring Boot 3.4.2</span>
            <span>JAVA 17</span>
          </li>
          <li className="flex gap-x-2">
            <span>PostgreSQL 15.8</span>
            <span>
              <LinkTag
                favicon="https://supabase.com/favicon/apple-icon-57x57.png"
                tag="Supabase (Database hosting)"
                href="https://supabase.com/"
              />
            </span>
          </li>
          <li className="flex gap-x-2" aria-atomic>
            <span>Cloudtype</span>
            <span>
              <LinkTag
                favicon="https://cloudtype.io/favicon.svg"
                tag="Cloudtype (Backend hosting)"
                href="https://cloudtype.io/ko/home"
              />
            </span>
          </li>
          <li className="flex gap-x-2" aria-atomic>
            <span>GitHub Actions</span>
          </li>
        </ul>
      </section>
      <br />
      <section className={`${styles["features"]}`}>
        <h3>실시간 채팅 참여자 집계</h3>
        <ul>
          <li>
            <span>
              브라우저 탭을 여러 개 열면 실시간 채팅 참여자가 중복으로 집계되는
              문제
            </span>
            <span>
              비정상적 웹소켓 연결 종료가 참여자 집계에 반영이 안 되는 문제
            </span>
          </li>
          <li>
            <span>
              채널 ID를 키 값으로 하는 캐시 구조는 Caffeine의 시간 기반 만료
              기능을 이용하지 못함
            </span>
            <span>
              채널 ID, 유저 ID, 클라이언트 ID를 Record로 묶어 key값으로하는
              Cache 구조로 변경
            </span>
            <span>
              중복 집계를 막고, 장시간 연결이 없는 인원을 집계에서 제거하는
              구조로 개선
            </span>
          </li>
          <li>
            <LinkTag
              href="https://sumr.it/post/7"
              tag="[블로그] 실시간 채팅 참여자 집계를 위한 Caffeine Cache 구조 개선 과정"
              favicon="https://sumr.it/favicon.ico"
            />
            <LinkTag
              href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/ChannelConnectionCountService.java#L53"
              tag="[코드] Cache 에서 참여자가 많은 순으로 상위 N개 채널을 집계하는 코드"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
        </ul>
      </section>
    </div>
    <div
      className={`${styles["swing-introduction"]} ${styles["swing-portfolio"]}`}
    >
      <section className={`${styles["features"]}`}>
        <h3>웹소켓 채팅 JWT 인증·인가</h3>
        <ul>
          <li>
            <span>WebSocket Handshake 시작 시 JWT 인증</span>
            <LinkTag
              href="https://sumr.it/post/3"
              tag="[블로그] HandshakeInterceptor JWT 인증"
              favicon="https://sumr.it/favicon.ico"
            />
          </li>
          <li>
            <span>WebSocket Handshake 성공 이후 메시지의 JWT 인증</span>
            <LinkTag
              href="https://sumr.it/post/4"
              tag="[블로그] ChannelInterceptor JWT 인증"
              favicon="https://sumr.it/favicon.ico"
            />
          </li>
          <li>
            <span>
              채팅 채널에 참여 중인 사람만 SUBSCRIBE, 메시지 SEND 가능하도록
              인가가 필요
            </span>
            <span>
              단일 컨테이너 환경을 고려하여 Redis 대신 Caffeine 캐시를 도입
            </span>
            <LinkTag
              href="https://sumr.it/post/5"
              tag="[블로그] 메시지 인가 문제 및 Redis가 아닌 Caffeine을 도입한 이유"
              favicon="https://sumr.it/favicon.ico"
            />
          </li>
          <li>
            <span>
              데이터베이스에서 인가 정보를 캐시하여 웹소켓 메시지의 인가 문제
              해결
            </span>
            <LinkTag
              href="https://sumr.it/post/6"
              tag="[블로그] Caffeine 캐시를 활용한 인가 문제 해결"
              favicon="https://sumr.it/favicon.ico"
            />
            <LinkTag
              href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/ChannelMemberService.java#L18"
              tag="[코드] 인가 정보를 캐시하는 ChannelMemberService 코드"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
        </ul>
        <h3>채팅 채널명 LIKE 검색 기능</h3>
        <ul>
          <li>
            <span>
              %KEYWORD% 형태의 검색은 기존의 B-Tree 인덱스를 제대로 이용하지
              못하는 문제
            </span>
            <LinkTag
              href="https://sumr.it/post/9"
              tag="[블로그] JMeter를 활용한 인덱스 적용 전후 LIKE 검색 성능 비교"
              favicon="https://sumr.it/favicon.ico"
            />
          </li>
          <li>
            <span>
              LIKE 부분 검색에 적합한 GIN 인덱스 및 Extension 도입으로 응답
              시간을 개선
            </span>
            <LinkTag
              href="https://sumr.it/post/10"
              tag="[블로그] PostgreSQL Extension및 GIN 인덱스를 활용한 LIKE 검색 성능 개선 과정"
              favicon="https://sumr.it/favicon.ico"
            />
            <LinkTag
              href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/repository/ChannelRepository.java#L19"
              tag="[코드] 채널명을 검색하는 ChannelRepository의 search 메서드"
              favicon="https://github.githubassets.com/favicons/favicon.svg"
            />
          </li>
        </ul>
      </section>
    </div>
  </Template>
));

export default MyrealtripPortfolio;
