import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Fb = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  const responseFacebook = response => {
    // console.log(response);
    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  }

  const componentClicked = () => {
      console.log('clicked');
      console.log(userID);
      console.log(email);
  }

  let fbContent;

  if(isLoggedIn) {
    fbContent = (
        <div style={{
          width: '200px',
        //   margin: 'auto',
          background: '#f4f4f4',
          padding: '0px',
        }}>
          <img src={picture} alt={name} style={{paddingLeft: '35%'}} />
          <h2>Welcome, {name}</h2>
          {/* Email: {email} */}
        </div>
      );
    }
    else {
        fbContent = (<FacebookLogin
            appId="3110514809193096"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />)
    }


    return <div>
        {fbContent}
    </div>;
};

export default Fb;
