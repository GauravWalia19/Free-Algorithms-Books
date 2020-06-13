import React,{useEffect,useState} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../styles/BooksPage.css';
import BooksList from '../others/BooksList';

const BooksPage = (props) => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        // call books api
        let object = {
            id: '5ee363e73d616c0dcb05d829',
            name: 'Algorithm Notes for Professionals',
            view: 'https://github.com/GauravWalia19/Free-Algorithms-Books/blob/master/Library/src/C/AlgorithmsNotesForProfessionals.pdf',
            size: '2.8 MB',
            language: 'C',
            download: 'https://github.com/GauravWalia19/Free-Algorithms-Books/raw/master/Library/src/C/AlgorithmsNotesForProfessionals.pdf'
        }
        setBooks([...books, object]);
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="booksPageDiv">
                <div className="searchHeader">
                    <div id="booksSearchDiv">
                        <span>
                            <i className="fas fa-search"></i>
                            {' '}
                            Search Books
                        </span>
                        {' '}
                        <input
                            type="search"
                            autoComplete="off"
                            className="searchInput"
                            value={search}
                            name="search"
                            onChange={handleSearchChange}
                        />
                    </div>
                    <h1>{props.match.params.language}</h1>
                </div>
                <hr />
                <BooksList books={books}/>
                <div className="footerLine">
                    We don't own any of these books.
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default BooksPage
