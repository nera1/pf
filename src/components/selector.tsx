import { FunctionComponent, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selector: FunctionComponent = () => {
  const [selected, setSelected] = useState("");

  const navigator = useNavigate();

  const handleChange = (value: string) => {
    console.log("선택된 값:", value);
    setSelected(value);
    if (value) {
      navigator({ pathname: value });
    }
  };
  return (
    <>
      <Select value={selected} onValueChange={handleChange}>
        <SelectTrigger className="w-[220px] h-7">
          <SelectValue placeholder="문서를 선택해 주세요" />
        </SelectTrigger>
        <SelectContent className="w-[220px]">
          <SelectGroup>
            <SelectLabel>넥스트그라운드(~2025.08.27)</SelectLabel>
            <SelectItem value="/nextground/introduction">자기소개서</SelectItem>
            <SelectItem value="/nextground/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>
              <del style={{ color: "black" }}>더 스윙(~2025.08.30)</del>
            </SelectLabel>
            <SelectItem value="/swing/introduction">자기소개서</SelectItem>
            <SelectItem value="/swing/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>아파트너(~2025.08.31)</SelectLabel>
            <SelectItem value="/aptner/introduction">자기소개서</SelectItem>
            <SelectItem value="/aptner/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>
              <del style={{ color: "red" }}>ABLY(~2025.08.20)</del>
            </SelectLabel>
            <SelectItem value="/ably/introduction">자기소개서</SelectItem>
            <SelectItem value="/ably/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default Selector;
