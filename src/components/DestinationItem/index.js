import './index.css'

const DestinationItem = props => {
  const {Details} = props
  const {id, name, imgUrl} = Details
  return (
    <li className="list-container">
      <div className="bg-container1">
        <img src={imgUrl} alt="destinationsList" className="image" />
        <h1 className="heading1">{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
