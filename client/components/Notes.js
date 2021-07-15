import { connect } from 'react-redux';
import React, { Component } from 'react';

class Notes extends Component {
  
    render() {
        const notes = [];
       
        console.log('props: ', this.props.gym)
        return (
            <div className='card' >
                <div className="card-header">Notes: </div>
                {this.props.gym.Notes.map((noteObj) => (
                    <div className='card-body' key={noteObj.id}>
                        <h6 className='cared-title'>Date: {noteObj ? noteObj.date : ''}</h6> 
                        <p className='card-text'>{noteObj.noteBody}</p>
                    </div>
                ))}
            </div>
        )
    }
}


export default Notes;