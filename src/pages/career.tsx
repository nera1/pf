"use client";

import CareerDocument from "@/components/career-document";
import { PortfolioRef } from "@/components/document";

interface Career {
  reference: React.RefObject<PortfolioRef>;
}

export default function Career({ reference }: Career) {
  return (
    <>
      <CareerDocument ref={reference} />
    </>
  );
}
