import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/'
})


function fetchAskList(){
  return instance.get('ask/1.json')
}

export {
  fetchAskList
}