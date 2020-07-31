import React, {useState} from 'react';
import MenuItem from '../Menu-Item';
import {connect} from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

const Directory = ({sections}) => {

    return (
        <div className = "directory-menu">
            {sections.map(({title,imageUrl,size,id,link}) => (
                <MenuItem  key = {id} title ={title} imageUrl= {imageUrl} size ={size} link ={link}/>
            ))}
        </div>
    )

    

}

const mapStateToProps = state => ({
    sections : selectDirectorySections(state)
})
export default connect(mapStateToProps)(Directory);