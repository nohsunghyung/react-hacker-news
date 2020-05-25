import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { fetchNewsList } from '../api/index'

const NewsView = () => {
  let [newsList, setNews] = useState([]);
  
  useEffect(() => {
    const getNewsList = async () => {
      const { data } = await fetchNewsList();
      try {
        setNews(data);
      } catch (err) {
        console.log(err);
      }
    }
    getNewsList();
  },[])

  return (
    <ul>
      {newsList.map(list => {
        return (
          <li className="item-list" key={list.id}>
            <div className="title-area">
              <a href={list.url}>{list.title}</a>
            </div>
            <div>
              <span className="point">{list.points || 0} point</span>
              <NavLink to={`user/${list.user}`} className="user">{list.user}</NavLink>
              <small>{list.time_ago}</small>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default NewsView