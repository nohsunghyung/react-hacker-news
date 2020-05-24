import React, { useState,useEffect } from 'react';
import {fetchUserInfo} from '../api/index'

const UserView = ({match}) => {
  const [userInfo, setUser] = useState([]);
  
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await fetchUserInfo(match.params.username);
      try {
        setUser(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  },[match.params.username]);

  return (
    <div>
      <div>{userInfo.id}</div>
    </div>
  )
}

export default UserView