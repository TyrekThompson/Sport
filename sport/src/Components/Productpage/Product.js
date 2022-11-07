import React from "react";
import Nav from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filter'

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default ProductPage;