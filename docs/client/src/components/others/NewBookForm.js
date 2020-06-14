import React,{useState} from 'react';

const NewBookForm = () => {
    const [newBook, setNewBook] = useState({
        title: "",
        bookName: "",
        language: "",
        downloadLink: "",
        username: ""
    })

    const handleChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        })
    }

    const getLanguageOptions = (arr)=>{
        return (
            arr.map(opt => {
                return(
                    <option key={opt}>{opt}</option>
                )
            })
        )
    }

    const handleNewBookSubmit = (e) => {
        e.preventDefault();
        fetch('/api/v1/book/add', {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.status === 200){
                alert(res.message);
                setNewBook({
                    title: "",
                    bookName: "",
                    language: "",
                    downloadLink: "",
                    username: ""
                })
            }else{
                alert('Something is not correct!!!\nEnter valid username');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="communityForm">
            <div className="upperForm">
                <h3>Suggest a new Book to Add</h3>
                <form autoComplete="off" onSubmit={handleNewBookSubmit}>
                    <div className="inputDiv">
                        Title<br/>
                        <input 
                            type="text"
                            name="title"
                            autoComplete="off"
                            value={newBook.title}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        Book Name<br/>
                        <input 
                            type="text"
                            name="bookName"
                            autoComplete="off"
                            value={newBook.bookName}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        Programming Language<br/>
                        <select 
                            onChange={handleChange} 
                            value={newBook.language} 
                            name="language"
                            required
                            className="formInput"
                            >
                            {getLanguageOptions(['','C','Cpp','CSharp','JAVA','JavaScript','Python','PHP','FSharp','Misc'])}
                        </select>
                    </div>
                    <div className="inputDiv">
                        Book Download Link<br/>
                        <input 
                            type="text"
                            name="downloadLink"
                            autoComplete="off"
                            value={newBook.downloadLink}
                            onChange={handleChange}
                            required
                            className="formInput"
                        />
                    </div>
                    <div className="inputDiv">
                        Github Username<br/>
                        <input 
                            type="text"
                            name="username"
                            autoComplete="off"
                            value={newBook.username}
                            onChange={handleChange}
                            required
                            className="formInput"
                        />
                    </div>
                    <div className="inputDiv">
                        <button type="submit" className="formButton">
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewBookForm;
