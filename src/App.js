// import './App.css';
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="d-flex gap-4 justify-content-center ">
    <Cards name = "Javascript"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400" 
          parg= "lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 "/>
    
    <Cards name = "Javascript"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400" 
          parg= "lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 " />
    <Cards name = "Javascript"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400" 
          parg= "lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 " />
    <Cards name = "Javascript"
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400" 
          parg= "lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 " />

    </div>
  );
}

export default App;
