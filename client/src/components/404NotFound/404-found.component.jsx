import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './404-found.styles';

const PageNotFound = () =>{


  
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/QIxIKBH.png' />
          <ErrorImageText>This Page is a Ghost</ErrorImageText>
        </ErrorImageOverlay>
      );
}

export default PageNotFound;
