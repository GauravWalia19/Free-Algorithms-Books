import React from 'react';
import {Link} from 'react-router-dom';

const Languages = (props) => {
    return (
        <ul className="languageList">
            {props.values.map(value => {
                return (
                    <li key={value}>
                        <Link to={'/'+value} className="language">
                            <i className="fas fa-link"></i>{'  '}
                            {value}
                        </Link>
                    </li>
                )
            })}    
        </ul>
    )
}

export default Languages;
