import React from 'react'
import { Route } from 'react-router-dom'
import Record from './Record'

// if (module.hot) { //test hot
//   module.hot.accept('./Record.js', function() {
//       console.log('Accepting the updated Record module!');
//   })
// }

const AppRouter = () => (
    <>
      <Route path="/" exact component={Record} />
    </>
  )

export default AppRouter