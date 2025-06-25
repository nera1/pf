"use client";

import CareerDocument from "@/components/career-document";
import { PortfolioRef } from "@/components/document";

interface Portfolio {
  reference: React.RefObject<PortfolioRef>;
}

export default function Portfolio({ reference }: Portfolio) {
  return (
    <>
      <CareerDocument ref={reference} />
    </>
  );
}
