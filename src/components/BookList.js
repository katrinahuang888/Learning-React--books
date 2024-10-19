import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';


function BookList() {
    const { books } = useBooksContext();

    // we can make use of context and props together!
    const renderedBooks = books.map((book) => {
        // we still need BookShow to understand what book it is passing down
        return (
            <BookShow key={book.id} book={book} />
        );
    });

    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}

export default BookList;