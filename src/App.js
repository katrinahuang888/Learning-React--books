import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    // Reaching up inside the books.js file and while we are exporting
    // BooksContext, we only want the fetchBooks portion of it
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
        // get access to fetchbooks using context
    }, []);
    
    return (
        <div className="app" >
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;