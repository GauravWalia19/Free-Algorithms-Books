import React,{useState} from 'react';

const BugReportForm = () => {
    const [bugForm, setBugForm] = useState({
        title: "",
        description: "",
        expectedBehaviour: "",
        device: "",
        os: "",
        browser: "",
        version: "",
        username: ""
    });

    const handleChange = (e) => {
        setBugForm({
            ...bugForm, 
            [e.target.name]: e.target.value
        });
    }

    const handleBugFormSubmit = (e)=>{
        e.preventDefault();
        fetch('/api/v1/bugs/report', {
            method: 'POST',
            body: JSON.stringify(bugForm),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.status === 200){
                alert(res.message);
                setBugForm({
                    title: "",
                    description: "",
                    expectedBehaviour: "",
                    device: "",
                    os: "",
                    browser: "",
                    version: "",
                    username: ""
                })
            }else{
                alert('Something is not correct!!!\nEnter valid username');
            }
        })
        .catch(err => console.log(err));
    }

    const getOptions = (arr)=>{
        return (
            arr.map(opt => {
                return(
                    <option key={opt}>{opt}</option>
                )
            })
        )
    }

    return (
        <div className="communityForm">
            <form autoComplete="off" onSubmit={handleBugFormSubmit}>
                <div className="upperForm">
                    <h3>Report a Bug to help us improve</h3>
                    <div className="inputDiv">
                        Title<br/>
                        <input 
                            type="text" 
                            name="title"
                            autoComplete="off"
                            value={bugForm.title}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        Describe the Bug<br/>
                        <textarea
                            name="description"
                            value={bugForm.description}
                            onChange={handleChange}
                            className="formInput"
                            required
                        >
                        </textarea>
                    </div>
                    <div className="inputDiv">
                        Expected Behaviour<br/>
                        <textarea
                            name="expectedBehaviour"
                            value={bugForm.expectedBehaviour}
                            onChange={handleChange}
                            className="formInput"
                            required
                        >
                        </textarea>
                    </div>
                    <div className="inputDiv">
                        Github Username<br/>
                        <input 
                            type="text" 
                            name="username"
                            autoComplete="off"
                            value={bugForm.username}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                </div>
                <div className="downForm">
                    <h3>Desktop / Smartphone</h3>
                    <div className="inputDiv">
                        Device<br/>
                        <select 
                            name="device" 
                            value={bugForm.device}
                            className="formInput"
                            onChange={handleChange} 
                            required
                        >
                            {getOptions(['','Laptop','IPAD','Smartphone'])}
                        </select>
                    </div>
                    <div className="inputDiv">
                        OS<br/>
                        <select 
                            name="os" 
                            value={bugForm.os}
                            className="formInput"
                            onChange={handleChange} 
                            required
                        >
                            {getOptions(['','Windows','Android','Linux','Unix'])}
                        </select>
                    </div>
                    <div className="inputDiv">
                        Browser<br/>
                        <select 
                            name="browser" 
                            value={bugForm.browser}
                            className="formInput"
                            onChange={handleChange} 
                            required
                        >
                            {getOptions(['','Google Chrome','Safari','Mozilla Firefox','Opera'])}
                        </select>
                    </div>
                    <div className="inputDiv">
                        Version<br/>
                        <input 
                            type="text" 
                            name="version"
                            autoComplete="off"
                            value={bugForm.version}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                </div>
                <div className="inputDiv">
                    <button type="submit" className="formButton">SUBMIT</button>
                </div>
            </form>
        </div>
    )
    
}

export default BugReportForm
