import { useState } from "react";

import { Wrapper } from "../components/Containers/Box.style";

import Input from "../components/Input/Input";
import ContentTable from "../components/Table/Table";

const Home = () => {
  const [measure, setMeasure] = useState("0");
  const [measureInput, setMeasureInput] = useState("0");

  const setInput = (e) => {
    setMeasureInput(e.target.value);
    setMeasure(e.target.value);
  };

  return (
    <Wrapper>
      <ContentTable measure={measure} />
      <Input handleChange={setInput} value={measureInput} />
    </Wrapper>
  );
};

export default Home;
