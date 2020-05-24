import React, { useState,Component } from 'react'
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import { fetchAskList } from '../api/index'

class AskView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userData: [],
    }
  }
  getList = async () => {
    const { data } = await fetchAskList();
    try {
      this.setState({
        userData: data,
      })
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.userData.map(list => {
            return (
              <div key={list.id}>
                <AskList 
                id={list.id}
                title={list.title}
                user={list.user}
                />
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

function AskList(props){
  const [id] = useState(props.id);
  const [title] = useState(props.title);
  const [user] = useState(props.user);
  const [date, setDate] = useState(new Date().toString());
  return (
    <li className="list">
      <div>ID:{id}</div>
      <div>title:{title}</div>
      <div><NavLink to={`/user/${user}`}>{user}</NavLink></div>
      <div>{date}</div>
      <button type="button" onClick={() => setDate(new Date().toString())}>버튼</button>
    </li>
  );
}

AskList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default AskView
