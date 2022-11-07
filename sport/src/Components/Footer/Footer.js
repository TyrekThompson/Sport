import React from "react";
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      <div>
        <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
        </head>
          <footer id="footer">
          <div className="footer--text">
          <Link className="footer--a" to="/"> <p> Jaylen Raynor East Forsyth High School ! &copy;{" "}</p></Link>
            
            
            
  
          </div>

        
        </footer>
      </div>
    );
  }
}

export default Footer;