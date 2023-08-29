import modelsData from "../models/modelsData";


const MoonPage = (props) => {
  const { modelName } = props;
  const moonData = modelsData[modelName];

  return (
    <div>
      <h2>{modelName}</h2>
      <p>{moonData.description}</p>
    </div>
  )
}

export default MoonPage