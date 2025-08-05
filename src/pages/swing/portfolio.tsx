"use client";

import { forwardRef } from "react";

import Template, { TemplateRef } from "@/components/template";

const SwingIntroduction = forwardRef<TemplateRef>((_, ref) => (
  <Template ref={ref}>
    <h1>Hello</h1>
  </Template>
));

export default SwingIntroduction;
