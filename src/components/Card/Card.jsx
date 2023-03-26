import {
  Card,
  MiddleLine,
  MeasureTitle,
  UnitsContainer,
  UnitTitle,
  Arrow
} from "./Card.style";

const ConversionsCards = ({
  measureInputted,
  unitA,
  unitB,
  UpperConversionResult,
  LowerConversionResult
}) => {
  return (
    <Card>
      <UnitsContainer>
        <MeasureTitle>{measureInputted}</MeasureTitle>{" "}
        <UnitTitle>{unitA}</UnitTitle> <Arrow>→</Arrow>{" "}
        <MeasureTitle>{UpperConversionResult}</MeasureTitle>{" "}
        <UnitTitle>{unitB}</UnitTitle>
      </UnitsContainer>
      <MiddleLine />
      <UnitsContainer>
        <MeasureTitle>{measureInputted}</MeasureTitle>{" "}
        <UnitTitle>{unitB}</UnitTitle> <Arrow>→</Arrow>{" "}
        <MeasureTitle>{LowerConversionResult}</MeasureTitle>{" "}
        <UnitTitle>{unitA}</UnitTitle>
      </UnitsContainer>
    </Card>
  );
};

export default ConversionsCards;
