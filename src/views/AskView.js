import React, { Component } from 'react'
// import PropTypes from 'prop-types';
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
      console.log(this.state.userData);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <ul>
        {this.state.userData.map((list, index) => {
          return (
            <li className="item-list" key={list.id}>
              <div className="title-area">
                <span>{index + 1}</span>
                <NavLink to="dd">{list.title}</NavLink>
              </div>
              <div>
                <span className="point">{list.points} point</span>
                <NavLink to={`/user/${list.user}`} className="user">{list.user}</NavLink>
                <small> by {list.time_ago}</small>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default AskView
