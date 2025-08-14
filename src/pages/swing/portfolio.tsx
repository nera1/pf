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
    <div
      className={`${styles["swing-introduction"]} ${styles["swing-portfolio"]}`}
    >
      <h1 className="text-xl !my-1">Portfolio</h1>
      <section className={`${styles["portfolio"]}`}>
        <h2>Madness</h2>
        <span className="text-[17px]">
          실시간 채팅 및 채널 관리 기능을 제공하는 웹 애플리케이션
        </span>
        <h2>Links</h2>
        <ul className="!gap-y-[6px]">
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
        <h2>Duration & Role</h2>
        <ul>
          <li className="flex gap-x-2">
            <span className={styles["badge"]}>2025.02 ~ </span>
            <span>개발 중</span>
          </li>
          <li className="flex gap-x-2">1인 개발 프로젝트</li>
          <li>백엔드, 프론트엔드, 인프라 직접 구축 및 유지보수</li>
        </ul>
      </section>
      <h2>Project Stack</h2>
      <section className={styles["project-stack"]}>
        <h3>Backend</h3>
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
                tag="Supbase(Database hosting)"
                href="https://supabase.com/"
              />
            </span>
          </li>
          <li className="flex gap-x-2" aria-atomic>
            <span>Cloudtype</span>
            <span>
              <LinkTag
                favicon="https://cloudtype.io/favicon.svg"
                tag="Cloudtype(Backend hosting)"
                href="https://cloudtype.io/ko/home"
              />
            </span>
          </li>
          <li className="flex gap-x-2" aria-atomic>
            <span>GitHub Actions</span>
          </li>
        </ul>
        <h3>Frontend</h3>
        <ul>
          <li className="flex gap-x-2">
            <span>Next.js 15</span>
            <span>Typescript</span>
            <span>Sass</span>
            <span>Tailwind CSS</span>
            <span>shadcn/ui</span>
          </li>
          <li>
            <span>GitHub Pages(Frontend hosting)</span>
          </li>
        </ul>
      </section>
    </div>
    <div
      className={`${styles["swing-introduction"]} ${styles["swing-portfolio"]}`}
    >
      <section className={`${styles["features"]}`}>
        <h2>Main</h2>
        <div className="flex gap-x-8">
          <div className="w-2/6">
            <img src="/images/swing/index.png" />
          </div>
          <div className="w-4/6">
            <h3>실시간 인기 채널 목록</h3>
            <ul>
              <li>
                <span>채팅 참여자 중복 집계 방지</span>
                <LinkTag
                  href="https://sumr.it/post/7"
                  tag="중복 집계를 막기위한 Cache 구조 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
              </li>
            </ul>
            <h3>참여자 많은 채널</h3>
            <ul>
              <li>
                <span>Spring Scheduler를 통한 채널 집계</span>
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/scheduler/ChannelScheduler.java#L15"
                  tag="매 시각 집계를 위해 실행되는 Scheduler 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/ChannelService.java#L191"
                  tag="채널을 집계하여 Cache하는 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className={`${styles["features"]}`}>
        <h2>New Channel · Sign In · Create Account</h2>
        <div className="flex gap-x-8">
          <div className="w-4/6">
            <h3>New Channel · Create Account</h3>
            <ul>
              <li>
                <span>JPA 기반 구현</span>
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/MemberService.java"
                  tag="무결성 보장을 위한 회원가입 Validation 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/ChannelService.java#L41"
                  tag="인증된 유저의 채널 생성 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
              </li>
            </ul>
            <h3>Sign In</h3>
            <ul>
              <li>
                <span>JWT 기반 인증</span>
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/services/JwtService.java"
                  tag="Access, Refresh token 발급 Service 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
                <span>Spring Security와 연동한 인증·인가 처리</span>
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/config/SecurityConfig.java"
                  tag="Spring Security Config 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/security/JwtAuthenticationFilter.java"
                  tag="JWT 기반 인증 Security Filter 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
              </li>
            </ul>
          </div>
          <div className="w-2/6">
            <img src="/images/swing/3pages.png" />
          </div>
        </div>
      </section>
    </div>
    <div
      className={`${styles["swing-introduction"]} ${styles["swing-portfolio"]}`}
    >
      <section className={`${styles["features"]}`}>
        <h2>Search</h2>
        <div className="flex gap-x-8">
          <div className="w-2/6">
            <img src="/images/swing/search.png" />
          </div>
          <div className="w-4/6">
            <h3>채널명 검색</h3>
            <ul>
              <li>
                <span>LIKE 검색 기능 개선</span>
                <LinkTag
                  href="https://sumr.it/post/9"
                  tag="Jmeter LIKE 검색기능 테스트 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
                <LinkTag
                  href="https://sumr.it/post/10"
                  tag="Extension을 활용한 성능개선 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
                <LinkTag
                  href="https://github.com/nera1/api.madness/blob/main/src/main/java/kr/mdns/madness/repository/ChannelRepository.java#L19"
                  tag="LIKE 검색 Repository 코드"
                  favicon="https://github.githubassets.com/favicons/favicon.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className={`${styles["features"]}`}>
        <h2>Chat</h2>
        <div className="flex gap-x-8">
          <div className="w-4/6">
            <h3>Chat Channel</h3>
            <ul>
              <li>
                <span>Websocket JWT 인증</span>
                <LinkTag
                  href="https://sumr.it/post/3"
                  tag="HandshakeInterceptor 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
                <LinkTag
                  href="https://sumr.it/post/4"
                  tag="ChannelInterceptor 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
              </li>
              <li>
                <span>Caffeine 기반 Websocket 메세지 인가</span>
                <LinkTag
                  href="https://sumr.it/post/5"
                  tag="메세지 인가 문제 및 Caffeine 도입 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
                <LinkTag
                  href="https://sumr.it/post/6"
                  tag="Caffeine을 활용한 인가 문제 해결 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
              </li>
            </ul>
          </div>
          <div className="w-2/6">
            <img src="/images/swing/chat.png" />
          </div>
        </div>
      </section>
    </div>
  </Template>
));

export default SwingPortfolio;
