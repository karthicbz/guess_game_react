import "./numberComponent.style";
import { NumberComponentContainer } from "./numberComponent.style";

interface numberComponentType {
  showIcon: boolean;
  num: number;
  getClickedNumber: Function;
}

const NumberComponent = ({
  showIcon,
  num,
  getClickedNumber,
}: numberComponentType) => {
  return (
    <NumberComponentContainer
      className="numberContainer"
      onClick={(e) => {
        // e.stopPropagation();
        getClickedNumber(e);
      }}
    >
      {showIcon && (
        <span className="material-symbols-outlined close-icon">close</span>
      )}
      <p className="number">{num}</p>
    </NumberComponentContainer>
  );
};

export default NumberComponent;
