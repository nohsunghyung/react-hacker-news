import React, {useState, useEffect} from 'react'
import { fetchNewsList } from '../api/index'

const NewsView = () => {
  let [newsList, setNews] = useState([]);
  
  useEffect(() => {
    const getNewsList = async () => {
      const { data } = await fetchNewsList();
      try {
        setNews(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getNewsList();
  },[])

  return (
    <div>
      news
    </div>
  )
}

export default NewsView