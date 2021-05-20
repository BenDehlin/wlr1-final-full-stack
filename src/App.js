import {useEffect} from 'react'
import './App.css';
import routes from './routes'
import Header from './components/Header'
import {setUser} from './redux/authReducer'
import {setCart} from './redux/cartReducer'
import {useDispatch} from 'react-redux'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/auth/me').then(res => {
      console.log(res.data)
      dispatch(setUser(res.data.user))
      dispatch(setCart(res.data.cart))
    }).catch((err) => {
      console.log(err.response)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App
