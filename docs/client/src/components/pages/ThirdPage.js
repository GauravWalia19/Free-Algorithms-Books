import React from 'react';
import '../styles/ThirdPage.css';
import Footer from '../common/Footer';
import NewBookForm from '../others/NewBookForm';
import BugReportForm from '../others/BugReportForm';

const ThirdPage = () => {
    return (
        <React.Fragment>
            <div id="thirdPage">
                <h2>Community</h2>
                <hr/>
                <BugReportForm />
                <hr id="mobileLine"/>
                <NewBookForm />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ThirdPage;
