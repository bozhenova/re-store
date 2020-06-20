export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: `JavaScript: The Good Parts`,
        author: 'Douglas Crockford'
      },
      {
        id: 2,
        title: `JavaScript: The Definitive Guide`,
        author: 'David Flanagan'
      }
    ];
  }
}
