import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.price
          }</p>
        {props.type === "stock" ?
          <button onClick={() => props.addToPortfolio(props)}>Add To Portfolio</button>
          :
          <button onClick={() => props.removeFromPortfolio(props.id)}>Sell Stock</button>
        }
      </div>
    </div>


  </div>
);

export default Stock
