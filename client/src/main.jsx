import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {getClubs, getMembers} from './features/Clubs/ClubSlice'
import {getActivities} from './features/Activities/activitySlice'

store.dispatch(getClubs)
store.dispatch(getMembers)
store.dispatch(getActivities)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
