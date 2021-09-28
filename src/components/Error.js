import React from 'react'

function Error({location}) {
  return <h2>This Question doesn't exist for {location.pathname}</h2>;

}

export default Error;
