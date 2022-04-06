import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import { FavoriteMovieT } from "../../store/favorites/types";
import { removeFromFavorites, rateFavMovie } from "../../store/favorites/action";

import { FaStar } from 'react-icons/fa';

import './FavMovieCard.css'

type OwnPropsT = {
    key: number;
    movie: FavoriteMovieT
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removeFromFavorites: (movie: FavoriteMovieT) => dispatch(removeFromFavorites(movie.id)),
    rateFavMovie: (movieId: number, rate: number) => dispatch(rateFavMovie(movieId, rate))
})

const connector = connect(null, mapDispatchToProps);

type ReduxPropsT = ConnectedProps<typeof connector>

type PropsT = OwnPropsT & ReduxPropsT;

class FavMovieCard extends Component<PropsT> {

    state = {
        rating: this.props.movie.rating ?? 0,
        hover: 0
    }

    removeFromFavs = (movie: FavoriteMovieT) => {
        this.props.removeFromFavorites(movie)
    }

    rateMovie = (movieId: number, rate: number) => {
        this.setState({ rating: rate })
        this.props.rateFavMovie(movieId, rate)
    }

    render() {
        return (
            <div className="movie-card" key={this.props.key}>
                <img src={this.props.movie.posterUrl} alt="Movie Poster" className="movie-poster" />
                <div className="info-wrapper">
                <h3 className="movie-title">{this.props.movie.title}</h3>
                <span className="movie-director">Directed by: {this.props.movie.director}</span>
                <span className="movie-length">{this.props.movie.length} min</span>
                <div>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue: number = i + 1;

                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={this.state.rating ? this.state.rating : ratingValue}
                                    onClick={() => this.rateMovie(this.props.movie.id, ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    color={ratingValue <= (this.state.hover || this.state.rating) ? '#d10a0a' : '#ede1e1'}
                                    onMouseEnter={() => this.setState({ hover: ratingValue })}
                                    onMouseLeave={() => this.setState({ hover: 0 })}
                                />
                            </label>
                        )
                    })}

                </div>

                <button className="add-button" onClick={() => this.removeFromFavs(this.props.movie)}>Remove from Favourites</button>
                </div>
            </div>
        );
    }
}

export default connector(FavMovieCard);