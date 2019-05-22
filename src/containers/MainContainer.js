import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: null,
    filter: undefined
  }
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => this.setState({
      stocks
    }))
  }

  render() {
    const organizedStocks =  this.applySort(this.applyFilter())
    return (
      <div>
        <SearchBar setSortState={this.setSortState} setFilterState={this.setFilterState} sort={this.state.sort} filter={this.state.filter}/>

        <div className="row">
          <div className="col-8">

            <StockContainer
              stocks={organizedStocks}
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

  setSortState = (sort) => {
    this.setState({
      sort
    })
  }

  applySort = (arr) => {
    let {sort} = this.state
    let sortedStocks = arr.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1)
    return sortedStocks
  }

  setFilterState = (filter) => {
    this.setState({
      filter
    })
  }

  applyFilter = () => {
    if (this.state.filter) {
      let filteredStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
      return filteredStocks
    }else {
      return this.state.stocks
    }
  }

}

export default MainContainer;
