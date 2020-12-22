const book = {
  title: 'JavaScript book',
  author: {
    name: 'John',
  },
};

const bookClone = JSON.parse(JSON.stringify(book));
// const bookClone = { ...book };

bookClone.author.name = 'Matthew';

console.log(book);
console.log(bookClone);
