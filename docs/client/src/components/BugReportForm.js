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
        console.log(bugForm);
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
                        <input 
                            type="text" 
                            name="device"
                            autoComplete="off"
                            value={bugForm.device}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        OS<br/>
                        <input 
                            type="text" 
                            name="os"
                            autoComplete="off"
                            value={bugForm.os}
                            onChange={handleChange}
                            className="formInput"
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        Browser<br/>
                        <input 
                            type="text" 
                            name="browser"
                            autoComplete="off"
                            value={bugForm.browser}
                            className="formInput"
                            onChange={handleChange}
                            required
                        />
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
