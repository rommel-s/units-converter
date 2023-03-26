import { Container, MainInput, Label, InputContainer } from "./Input.style";

const Input = ({ handleChange, handleValue }) => {
  return (
    <InputContainer>
      <Container>
        <MainInput
          onChange={handleChange}
          value={handleValue}
          type="number"
        ></MainInput>
        <Label>Insira o valor para converter</Label>
      </Container>
    </InputContainer>
  );
};

export default Input;
