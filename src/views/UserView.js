import React, { useState,useEffect } from 'react';
import {fetchUserInfo} from '../api/index'

const UserView = ({match}) => {
  let [userInfo, setUser] = useState([]);
  const username = match.params.username;
  
  const setUserInfo = async () => {
    const { data } = await fetchUserInfo(username);
    try {
      setUser( userInfo = data )
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setUserInfo();
  });

  return (
    <div>
      <div>{userInfo.id}</div>
    </div>
  )
}

export default UserView