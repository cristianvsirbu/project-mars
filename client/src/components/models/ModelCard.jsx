

const ModelCard = ({ name, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} />
    </div>
  )
}

export default ModelCard;