import './assets/css/index.css'
import { Route, Routes } from 'react-router-dom'
import UserUploadImage from '../views/UserUploadImage'
import PerformConversions from '../views/PerformConversions'
import UserImage from '../view/UserImage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserImage />} />
        <Route path='/user' element={<UserUploadImage />} />
        <Route path='/edit-image' element={< PerformConversions />} />
      </Routes>
    </>
  )
}

export default App
