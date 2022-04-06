import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from 'react-router-dom';

import { ApplicationStateT } from '../../store';
import { FavoriteMovieT } from "../../store/favorites/types";

import './Navigation.css'

type OwnPropsT = {
    data: FavoriteMovieT[],
    loading: boolean,
    error?: string
}

const mapStateToProps = ({ favorites }: ApplicationStateT) => ({
    data: favorites.data,
    loading: favorites.loading,
    error: favorites.error
});

const connector = connect(mapStateToProps);

type ReduxPropsT = ConnectedProps<typeof connector>;

type PropsT = OwnPropsT & ReduxPropsT;

class Navigation extends Component<PropsT> {

    render() {
        return (
            <nav id="nav-section">
                <div id="logo-div"
                    // onClick={() => window.location.reload()}
                >
                    <span>!</span>
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" id="logo" alt="Logo" />
                    </Link>
                </div>

                <ul id="nav-ul">
                    <li className="li-nav"><Link to="/">All Movies</Link></li>
                    <li className="li-nav">
                        <Link to="/favorites">
                            Favourites
                            {this.props.data.length > 0
                                ? <span id="favCount">{this.props.data.length}</span>
                                : <span></span>
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connector(Navigation);