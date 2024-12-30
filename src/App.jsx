import { BrowserRouter } from "react-router-dom";
import { About, Contact, Navbar, Projects, Tech } from './components';
const App = () => {
  return(
    <BrowserRouter>
    <div className=" relative z-0 bg-light-bg dark:bg-dark-bg">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          
        </div>
    </div>
    </BrowserRouter>

  )
    
}

export default App
