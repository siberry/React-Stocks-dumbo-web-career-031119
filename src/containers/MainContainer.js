import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks
    }))
  }

  addToPortfolio = (stock) => {
    this.setState(prevState => {
      return {portfolio: [...prevState.portfolio, stock]}
    })
  }

  removeFromPortfolio = (stockId) => {
    this.setState(prevState => {
      let newPortfolio = prevState.portfolio.filter(stock => stock.id !== stockId)
      return {portfolio: newPortfolio}
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.stocks}
                addToPortfolio={this.addToPortfolio}
                />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
