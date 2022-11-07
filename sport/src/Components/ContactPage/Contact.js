import React from 'react';
import Nav from '../Navbar/Navbar';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

 


class Contact extends React.Component {
    render() {
        return(
            <body>
            <div>
                <Nav />
                <Form />
                <Footer />
            </div>
            </body>
        )
    }
}

export default Contact;