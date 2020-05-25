import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/'
})

function fetchAskList(){
  return instance.get('ask/1.json')
}

function fetchNewsList() {
  return instance.get('news/1.json')
}

function fetchJobsList() {
  return instance.get('jobs/1.json')
}

function fetchUserInfo(username) {
  return instance.get(`user/${username}.json`)
}

export {
  fetchAskList,
  fetchUserInfo,
  fetchNewsList,
  fetchJobsList
}