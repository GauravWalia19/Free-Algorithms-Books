import React from 'react';
import '../styles/ThirdPage.css';
import Footer from '../common/Footer';
import NewBookForm from '../NewBookForm';
import BugReportForm from '../BugReportForm';

const ThirdPage = () => {
    return (
        <div id="thirdPage">
            <h2>Community</h2>
            <hr/>
            <BugReportForm />
            <hr id="mobileLine"/>
            <NewBookForm />
            <Footer />
        </div>
    )
}

export default ThirdPage;
