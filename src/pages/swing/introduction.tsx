"use client";

import MyDocument, { PortfolioRef } from "@/components/document";

interface Introduction {
  reference: React.RefObject<PortfolioRef>;
}

export default function Introduction({ reference }: Introduction) {
  return (
    <>
      <MyDocument ref={reference} />
    </>
  );
}
