import './App.css';
import React , {useState, useEffect} from 'react'
import Navigation from './Components/Navigation';
// import Header from "./Components/Header"
import { actionTypes } from './app/reducer';
import jwtDecode from 'jwt-decode';
import { useStateValue } from './StateProvider';
// import jwtDecode from 'jwt-decode';
function App() {
  const [{}, dispatch] = useStateValue()
  const [loadingState, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/refreshLogin`, {
      method:"POST",
      credentials:'include',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json'
      }
      
    }).then(res => 
      res.json()
    ).then(data => {
      if(!data.error)
      {
        dispatch({
          type: actionTypes.SET_USER,
          user: jwtDecode(data.accesstoken).user
        })
        dispatch({
          type: actionTypes.SET_TOKEN,
          accesstoken: data.accesstoken
        })
        // console.log(data)
      }
      setLoading(false)
    })

  }, [])
  if(loadingState)return (<h1>Loading...</h1>)
  return (
    <div className="App">
      {/* <Home/> */}
      <Navigation />
      
    </div>
  );
}

export default App;
