import {React} from "react";

function Counter(){ 
    const [count, setCount] = useState(10);

    function increment(){
        setCount(count+1)
    }

    function deincrement(){
        if(count !== 0){
            setCount(count-1)
        }
    }

    return(
        <div id='counter'> 
            <button onClick={deincrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter