import DestinationItem from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <input type="search" />
      <ul className="ul-container">
        {destinationsList.map(item => (
          <DestinationItem Details={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
export default DestinationSearch
