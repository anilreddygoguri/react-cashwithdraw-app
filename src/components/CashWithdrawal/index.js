import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    money: 2000,
  }

  stateChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state

    return (
      <div className="cashWithdrawal-bg-container">
        <div className="Withdraw-card">
          <div className="profile-container">
            <div className="profile">
              <p className="profile-image">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees">{money}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-amount-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-amount-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-ul-items">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  stateChange={this.stateChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
