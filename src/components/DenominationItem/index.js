import './index.css'

const DenominationItem = props => {
  const {denominationDetails, stateChange} = props
  const {value} = denominationDetails
  const onDeductAmount = () => {
    stateChange(value)
  }

  return (
    <div>
      <li className="list-items">
        <button type="submit" className="button" onClick={onDeductAmount}>
          {value}
        </button>
      </li>
    </div>
  )
}
export default DenominationItem
