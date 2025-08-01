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
            <SelectLabel>더 스윙(~2025.08.31)</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>아파트너(~2025.08.31)</SelectLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default Selector;
