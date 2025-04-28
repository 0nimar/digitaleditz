import { useEffect, useState } from "react";

function useDebounce(value:any,time:number) {
    const[debouncedValue,setDebouncedvalue]=useState(value);
    useEffect(() => {
    const timeout=setTimeout(() => {
        setDebouncedvalue(value)
    }, time);
return () => clearTimeout(timeout);
}, [value])
return debouncedValue;
}
export {useDebounce};