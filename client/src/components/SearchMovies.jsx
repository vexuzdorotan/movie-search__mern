import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// import omdb from '../api/omdb';
import { listMovies } from '../actions/index.js';

class SearchMovies extends Component {
  formOnSubmit = (formValues) => {
    // this.searchMovies(formValues);
    this.props.listMovies(formValues.search);
  };

  renderList() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <Link className="navbar-brand text-success font-weight-bold" to="/">
            YTS.vex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

            <form
              onSubmit={this.props.handleSubmit(this.formOnSubmit)}
              className="form-inline mt-2 mt-md-0"
            >
              <div>
                <label htmlFor="search"></label>
                <Field
                  className="form-control mr-sm-2"
                  name="search"
                  component="input"
                  type="text"
                />
              </div>

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }

  render() {
    return <React.Fragment>{this.renderList()}</React.Fragment>;
  }
}

const formWrapped = reduxForm({
  form: 'searchMovie',
})(SearchMovies);

const mapStateToProps = (state) => {
  return {
    listMovies: state.movie,
  };
};

export default connect(mapStateToProps, { listMovies })(formWrapped);
