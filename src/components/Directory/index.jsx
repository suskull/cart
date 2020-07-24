import React, {useState} from 'react';
import MenuItem from '../Menu-Item';

const Directory = () => {


    const sectionsData = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            link: 'hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            link: 'jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            link: 'sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            link: 'womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            link: 'mens'
          }

    ]

    const [sections, setSections] = useState(sectionsData);
    console.log(sections);

    return (
        <div className = "directory-menu">
            {sections.map(({title,imageUrl,size,id,link}) => (
                <MenuItem  key = {id} title ={title} imageUrl= {imageUrl} size ={size} link ={link}/>
            ))}
        </div>
    )

    

}


export default Directory;