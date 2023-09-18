import './assets/css/index.css'
import { Route, Routes } from 'react-router-dom'
import UserUploadImage from '../views/UserUploadImage'
import PerformConversions from '../views/PerformConversions'
import DownloadImage from '../views/DownloadImage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserUploadImage />} />
        <Route path='/edit-image' element={< PerformConversions />} />
        <Route path='/download' element={<DownloadImage />} />
      </Routes>
    </>
  )
}

export default App
