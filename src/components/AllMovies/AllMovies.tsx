import React, { ChangeEvent, Component } from "react";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import { ApplicationStateT } from "../../store";
import { MovieT } from '../../store/catalog/types';
import { fetchRequest } from "../../store/catalog/action";

import { fetchQuotesRequest } from '../../store/quotes/actions';

import MovieCard from "../MovieCard/MovieCard";
import Quote from "../Quote/Quote";
import Loader from '../Loader/Loader';

import './AllMovies.css';

type OwnPropsT = {};

const mapStateToProps = ({ catalog, favorites }: ApplicationStateT) => ({
    data: catalog.data,
    loading: catalog.loading,
    error: catalog.error,
    favoriteIds: favorites.data.map(({ id }) => id),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchRequest: () => dispatch(fetchRequest()),
    fetchQuotesRequest: () => dispatch(fetchQuotesRequest())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxPropsT = ConnectedProps<typeof connector>;

type PropsT = OwnPropsT & ReduxPropsT;

class AllMovies extends Component<PropsT> {

    //setting default search query state
    state = {
        query: '',
    }

    componentDidMount() {
        this.props.fetchRequest();
        this.props.fetchQuotesRequest();
    }

    renderMovies(movies: MovieT[]) {
        let moviesToRender = movies;

        if (this.state.query) {
            moviesToRender = moviesToRender.filter(m => m.title.toLowerCase().includes(this.state.query.toLowerCase()));
        }

        return moviesToRender.map((m: MovieT, index: number) => {
            return <MovieCard key={index} movie={m} favorites={this.props.favoriteIds} />
        })
    }

    onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ query: e.target.value })
    }

    render() {

        return (
            <section className="all-movies">

                <div id="welcome-wrapper">
                    <h1 id="welcome-title">Welcome to !Netflix</h1>
                    <h3 id="welcome-undertitle">We don't have a lot of movies to offer, but hey at least it's free!</h3>

                    {this.props.loading
                        ? <Loader />
                        : <Quote />
                    }

                </div>

                <div className="search-wrapper">
                    <input type="text"
                        placeholder="Search movies"
                        id="search-input"
                        onChange={this.onSearchInputChange}
                    />
                </div>

                {this.props.loading
                    ? <Loader />
                    : (
                        <div className="movie-cards-wrapper">
                            {this.renderMovies(this.props.data)}
                        </div>
                    )
                }

            </section>
        );
    }
};

export default connector(AllMovies);