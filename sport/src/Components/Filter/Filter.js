import React from "react";
import storeitem from "../Data/storeitem.json";
import ProductsBody from '../ProductBody/ProductBody.js';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    // Setting default state
    this.state = {
      type: "default",
      price: "default"
    }
  }

  // The set value when choosing an option on the select element
handlePriceDropdownSelect = (event) => {
  this.setState({
    price: event.target.value,
    type: event.target.value
  })
}


  render() {
    // Passing down state to be used with in this scope of code
    const { type, price } = this.state;
    return(
      <div>
        <div className="grid__filter">
          <label class="filters">
            SCHOLARSHIP OFFERS :
          </label>
      
        </div>

        <div className="grid__filter">
          
        
        </div>
        <div id="flex-container">
        {storeitem.products.map((item) => {
          if (type === 'default' &&  price === 'default') {
            return <ProductsBody item={item}/>
          }  else if (type === item.type || price === item.price) {
            return <ProductsBody item={item} />
          }
        })}
        </div>
      </div>
    );
  }
}


export default Filter;