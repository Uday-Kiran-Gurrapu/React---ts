import { useState } from "react";

function Home() {
    const[count, setCount] = useState<number>(0);
    return (
    <div>
        <h2>Welcome to the Home Page</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => count > 0 && setCount(count - 1)} disabled={count === 0}>Decrease</button>
    </div>);
}
export default Home;