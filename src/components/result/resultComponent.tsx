interface resultComponentType {
  resultText: string;
}

const ResultComponent = ({ resultText }: resultComponentType) => {
  return <p>{resultText}</p>;
};

export default ResultComponent;
