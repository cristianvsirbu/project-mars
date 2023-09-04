import { useContext } from "react";
import { ModelsDataContext } from "../models/modelsContext";

const MarsPage = () => {
  const modelData = useContext(ModelsDataContext);
  console.log(modelData);
  return (
    <div className="text-white">
      <h1>Mars Page</h1>
    </div>

  )
}


export default MarsPage;
