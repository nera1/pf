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
        <span className="text-[15px]">
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
        <h2>Index page</h2>
        <div className="flex gap-x-5">
          <div className="w-2/6">
            <img src="/images/swing/index.png" />
          </div>
          <div className="w-4/6">
            <h3>Caffeine 활용한 실시간 인기 채널 집계</h3>
            <ul>
              <li>
                <span>카페인 도입 이유</span>
                <LinkTag
                  href="https://sumr.it/post/5"
                  tag="Caffeine 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
              </li>
              <li>
                <span>설정 및 사용</span>
                <LinkTag
                  href="https://sumr.it/post/5"
                  tag="Caffeine 설정, 사용 블로그 포스트"
                  favicon="https://sumr.it/favicon.ico"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Template>
));

export default SwingPortfolio;
