import { BrowserRouter } from "react-router-dom";
import { About, Greeting, Contact, Navbar, Projects, Tech } from './components';
import 'font-awesome/css/font-awesome.min.css';
const App = () => {
  return(
    <BrowserRouter>
    <div className=" relative z-0 bg-light-bg dark:bg-dark-bg">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Greeting />
          <Tech />
          
        </div>
    </div>
    </BrowserRouter>

  )
    
}

export default App
