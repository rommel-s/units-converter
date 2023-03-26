import Card from "../Card/Card";
import { TableWrapper } from "../Containers/Box.style";

const ContentTable = ({ measure }) => {
  const fixDecimal = (nbrToFix) => {
    return nbrToFix.toFixed(2);
  };

  return (
    <TableWrapper>
      <Card
        measureInputted={measure}
        unitA={"cm"}
        unitB={"px"}
        UpperConversionResult={fixDecimal(measure * 37.8)}
        LowerConversionResult={fixDecimal(measure * 0.026)}
      />
      <Card
        measureInputted={measure}
        unitA={"em"}
        unitB={"px"}
        UpperConversionResult={fixDecimal(measure * 16)}
        LowerConversionResult={fixDecimal(measure * 0.0625)}
      />
      <Card
        measureInputted={measure}
        unitA={"px"}
        unitB={"pt"}
        UpperConversionResult={fixDecimal(measure * 1.3)}
        LowerConversionResult={fixDecimal(measure * 0.75)}
      />
      <Card
        measureInputted={measure}
        unitA={"cm"}
        unitB={"px"}
        UpperConversionResult={fixDecimal(measure * 0.035273)}
        LowerConversionResult={fixDecimal(measure * 28.35)}
      />
    </TableWrapper>
  );
};

export default ContentTable;
