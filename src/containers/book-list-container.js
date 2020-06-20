import React, { Component } from 'react';
import Spinner from '../components/spinner';
import BookList from '../components/book-list';
import ErrorIndicator from '../components/error-indicator';
import { connect } from 'react-redux';
import { withBookstoreService } from '../components/hoc';
import { fetchBooks, bookAddedToCart } from '../actions';
import { compose } from '../utils';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
  };
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
