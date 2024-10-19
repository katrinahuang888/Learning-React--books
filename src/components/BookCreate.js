import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    // Event handler for whenever the user changes the text input
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // When user hits button, that will trigger submit event on the form
    // Call onCreate and pass on the title that we have been maintaining
    const handleSubmit = (event) => {
        event.preventDefault(); // We do not want to reload the page
        createBook(title); // Pass in user-created title
        setTitle(''); // Empty out input for user convenience
    };

    return(
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                </label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;