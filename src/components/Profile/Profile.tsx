import React from 'react';
import { Image } from 'react-native';
import profile from '../../../assets/profile.png';


export function Profile() {
    return(
<>
<Image
      source={profile}
      style={{
        resizeMode: 'contain',
        height:150,
      }} 
     />
</>
    );
}