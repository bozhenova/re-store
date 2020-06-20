export default class BookstoreService {
  data = [
    {
      id: 1,
      title: `JavaScript: The Good Parts`,
      author: 'Douglas Crockford',
      price: 19,
      coverImage:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5965/9780596517748.jpg'
    },
    {
      id: 2,
      title: `JavaScript: The Definitive Guide`,
      author: 'David Flanagan',
      price: 68,
      coverImage: 'https://cdn1.ozone.ru/multimedia/c650/1003130699.jpg'
    }
  ];

  getBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
