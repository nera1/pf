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
            <SelectLabel>기본</SelectLabel>
            <SelectItem value="/introduction">자기소개서</SelectItem>
            <SelectItem value="/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>더 스윙(~2025.08.30)</SelectLabel>
            <SelectItem value="/swing/introduction">자기소개서</SelectItem>
            <SelectItem value="/swing/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>아파트너(~2025.08.31)</SelectLabel>
            <SelectItem value="/aptner/introduction">자기소개서</SelectItem>
            <SelectItem value="/aptner/portfolio">포트폴리오</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default Selector;
