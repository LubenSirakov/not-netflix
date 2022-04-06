import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

import { ApplicationStateT } from "../../store";
import { FavoriteMovieT } from "../../store/favorites/types";
import { fetchFavsRequest } from "../../store/favorites/action"

import FavMovieCard from "../FavMovieCard/FavMovieCard";

import './Favorites.css';
import Loader from "../Loader/Loader";

type OwnPropsT = {
    favorites: FavoriteMovieT[],
}

const mapStateToProps = ({ favorites }: ApplicationStateT) => {
    const loading = favorites.loading;
    return {
        loading,
        favorites: favorites.data
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchFavsRequest: () => dispatch(fetchFavsRequest())
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxPropsT = ConnectedProps<typeof connector>;

type PropsT = OwnPropsT & ReduxPropsT

class Favorites extends Component<PropsT> {

    componentDidMount() {
        this.props.fetchFavsRequest();
        window.scroll(0, 0);
    }

    render() {
        return (
            <section className="all-movies">
                <h1 id="fav-movies">Your favorite movies</h1>

                {this.props.loading ? <Loader /> : (
                <div className="movie-cards-wrapper">
                    {
                        this.props.favorites.length > 0
                            ? this.props.favorites.map((f: FavoriteMovieT) => <FavMovieCard key={f.id} movie={f} />)
                            : <h2 id="no-movies">You have no favorite movies yet</h2>
                    }
                </div>
                )}

            </section>
        )
    }
}

export default connector(Favorites);