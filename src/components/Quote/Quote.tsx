import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";

import { QuoteT } from "../../store/quotes/types";
import { ApplicationStateT } from "../../store/index";

type OwnPropsT = {
    quotes: QuoteT[]
};

const mapStateToProps = ({ quotes }: ApplicationStateT) => ({
    quotes: quotes.data
});

const connector = connect(mapStateToProps);

type ReduxPropsT = ConnectedProps<typeof connector>;

type PropsT = OwnPropsT & ReduxPropsT;

class Quote extends Component<PropsT> {

    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }

    render() {
        let num: number = this.getRandomInt(0, 100);

        return (
            <div id="quote-div">
                <h3 className="quotes">”</h3>
                {
                    this.props.quotes.map((q: QuoteT, index: number) => {
                        if (index == num) {
                            return <p id="quote" key={index}>{q.line}</p>
                        }
                    })
                }
                <h3 className="quotes">„</h3>
            </div>
        );
    }
}

export default connector(Quote);