import React from 'react'

const Book = ({book}) => {
    return (
        <div className="bookDiv">
            <img 
                src={'./images/'+book.language+'/'+book.id+'.png'} 
                alt="book"
                className="bookImage"
            />
            <span>{book.name}</span>
            <a href={book.download} className="buttonLink">
                <button>Download</button>
            </a>
            <a 
                href={book.view} 
                className="buttonLink" 
                target="_blank"
                rel="noopener noreferrer"
                >
                <button>View</button>
            </a>
        </div>
    )
}

export default Book;
