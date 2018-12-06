import React from 'react';
import Auth from './Auth'
import UserData from './Auth/UserData'



const App = (props) => (
  <div>
    <Auth>
      <div>
        <UserData />
  </div>
   </Auth>
  </div>
)

export default App;
