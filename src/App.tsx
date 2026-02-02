import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Users from "./components/Users";
import ProfileForm from "./components/ProfileForms";
function App() {
  const[count, setCount] = useState<number>(0)
  return (
    <div>
      <Header title="React + TypeScript 🚀" userName="Uday" />
      <Counter count= {count} 
      onIncrease= {() => setCount(count + 1)} 
      onDecrease= {() => count > 0 && setCount(count - 1)}/>
      <Users/>
      <ProfileForm/>
    </div>
    );
}  


export default App;
