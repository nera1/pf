import { useReactToPrint } from "react-to-print";
import { useRef, useImperativeHandle, forwardRef, ReactNode } from "react";

import "../styles/document.css";

export interface TemplateRef {
  toPrint: () => void;
}

export interface LinkTagProps {
  href: string;
  tag: string;
  favicon?: string;
}

export const LinkTag: React.FC<LinkTagProps> = ({ href, tag, favicon }) => (
  <label className="ml-[8px]">
    {favicon && (
      <img width={20} height={20} src={favicon} alt={`${tag} icon`} />
    )}
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {tag}
    </a>
  </label>
);

interface TemplateProps {
  children: ReactNode;
}

const Template = forwardRef<TemplateRef, TemplateProps>(({ children }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrint = useReactToPrint({ contentRef });

  const toPrint = () => reactToPrint();

  useImperativeHandle(ref, () => ({
    toPrint,
  }));

  return (
    <div className="document">
      <div ref={contentRef} className="canvas">
        {children}
      </div>
    </div>
  );
});

export default Template;
