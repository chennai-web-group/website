import fetch from 'isomorphic-unfetch';
import state from '../state';

export async function makeRequest(url) {
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

export async function getTalksList() {
  if (process.env.NODE_ENV === 'development') {
    return state.mockTalksList;
  }

  let talksUrl = `https://cdn.jsdelivr.net/gh/chennai-web-group/talks@${state.eventsApiVersion}/talks.json`;
  let json = await makeRequest(talksUrl);
  return json;
}
