import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'aos/dist/aos.css'; // Import AOS styles
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
