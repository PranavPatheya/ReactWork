import MyButton from "./MyButton";
import "./app-new.css";
import Time from "./Time";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function AppNew(){
    const name = 'Pranav Kulkarni';
    const element = <h1>Hello {name}</h1>;
    function greet(name){
        return 

    }
    
    


    return(
        <div class="app-new">
            
            <Navbar />
            <h1>React Practice</h1>
            {element}
            {greet("world")}
            
            <MyButton />
            
            <Time />
            
            
        </div>
    );
    
}
export default AppNew;