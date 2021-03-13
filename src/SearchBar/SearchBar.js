import React, {useState} from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(evt) {
        if (typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log('TERM: ', term);
        console.log('LOCATION: ', location);
        evt.preventDefault();
    }

    // if props.small is NOT set, add an is-medium class
    const sizeClass = props.small ? '' : 'is-medium'
    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} 
                        onChange={(evt)  =>  setTerm(evt.target.value)}
                        type="text" 
                        placeholder="climbing gym name"/>
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>Near</div>
                </div>
                <p className="control">
                    <input className={`input ${sizeClass} ${styles['input-control']}`} 
                        onChange={(evt)  =>  setLocation(evt.target.value)}
                        type="text" 
                        placeholder="Where"/>
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
                    <span className="icon is-small"><i className="fas fa-search"></i></span>
                </div>
            </div>
        </form>
    );
}