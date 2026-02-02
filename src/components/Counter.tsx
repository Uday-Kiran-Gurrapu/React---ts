type CounterProps = {
    onIncrease:() => void;
    onDecrease:() => void;
    count: number;
};
function Counter({onIncrease, onDecrease, count}: CounterProps) {
    return (
        <div>
            <h2>{count ===0? "Count is Zero"  : `Count: ${count}` }</h2>
            <button onClick={()=>onIncrease()}>Increase</button>
            <button onClick={ ()=> count>0 && onDecrease()}>Decrease</button>
        </div>
    )
}
export default Counter;