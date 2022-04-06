import React, { Component } from "react";

import './NotFound.css'

class NotFound extends Component {

    render() {
        return (
            <section className="not-found">
                <img src="https://www.moes.com/assets/moes/img/testing/404/CryingChip404.gif" alt="404" id="nf-img" />
                <h2 id="oh-no">Oh, no!</h2>
                <p id="info-text">It seems that the page you are looking for does not exist!</p>
            </section>
        );
    }
}

export default NotFound;