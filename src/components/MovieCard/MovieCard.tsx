import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import { MovieT } from "../../store/catalog/types";
import { FavoriteMovieT } from '../../store/favorites/types';
import { addToFavorites } from "../../store/favorites/action";

import './MovieCard.css'

type OwnPropsT = {
    movie: MovieT,
    favorites: FavoriteMovieT['id'][]
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addToFavorites: (movie: MovieT) => dispatch(addToFavorites(movie)),
});

const connector = connect(null, mapDispatchToProps);

type ReduxPropsT = ConnectedProps<typeof connector>;

type PropsT = OwnPropsT & ReduxPropsT;

class MovieCard extends Component<PropsT> {

    addMovieToFavs = (movie: MovieT) => {
        this.props.addToFavorites(movie)
    }

    render() {
        return (
            <div className="movie-card" key={this.props.movie.id}>
                <img src={this.props.movie.posterUrl} alt="Movie Poster" className="movie-poster" />
                <div className="info-wrapper">
                <h3 className="movie-title">{this.props.movie.title}</h3>
                <span className="movie-director">Directed by: {this.props.movie.director}</span>
                <span className="movie-length">{this.props.movie.length} min</span>

                {
                    this.props.favorites.includes(this.props.movie.id)
                        ? <span>This movie was added to Favourites</span>
                        : <button className="add-button" onClick={() => this.addMovieToFavs(this.props.movie)}>Add to Favourites</button>
                }
                </div>
            </div>
        )
    }

}

export default connector(MovieCard);