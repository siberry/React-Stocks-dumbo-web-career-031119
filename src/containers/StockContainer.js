import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = (category) => {
    return this.props.stocks.map(stock => <Stock {...stock} type="stock" addToPortfolio={this.props.addToPortfolio}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks("stocks")
        }
      </div>
    );
  }

}

export default StockContainer;
