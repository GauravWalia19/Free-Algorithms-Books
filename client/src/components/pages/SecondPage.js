import React from 'react';
import '../styles/SecondPage.css';

import Langauges from '../Languages';

const SecondPage = () => {
    return (
        <div id="secondPage">
            <div className="secondPageContent">
                <h1>EBooks Library</h1>
                <Langauges values={['C','Cpp','CSharp','JAVA','JavaScript','Python','PHP','FSharp','Misc']}/>
            </div>   
            <img src="./images/books.png" alt="books" className="booksImage"/> 
        </div>
    )
}

export default SecondPage;
