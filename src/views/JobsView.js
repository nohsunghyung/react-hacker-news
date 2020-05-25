import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { fetchJobsList } from '../api/index'

const JobsView = () => {
  let [jobsList, setList] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await fetchJobsList();
      try {
        setList(data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchItem();
  },[])
  return (
    <ul>
      {jobsList.map(list => {
        return (
          <li className="item-list" key={list.id}>
            <div className="title-area">
              <a href={list.url}>{list.title}</a>
            </div>
            <div>
              <span className="point">{list.point || 0} point</span>
              <small>{list.time_ago}</small>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default JobsView
