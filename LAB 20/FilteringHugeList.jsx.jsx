import React, {  useState, useTransition } from 'react'

export default function FilteringHugeList(){
    const [name,setName] = useState("");
    const [data,setData] = useState([]);
    const [isPending, setTansition] = useTransition();


    function inputChange(e) {

    setName(e.target.value);
    setTansition(()=>{
        let tempData = [];
        for(let i=0;i<10000;i++){
            tempData.push(name+ " "+ i);
        }
        setData(tempData);
    })
}

  return (
    <>
        <input type='text' placeholder='type here....' onChange={inputChange}></input>
        <ul>
            {isPending && data.map((d)=>{<li>{d}</li>})}
            {isPending && 'please wait....'}
        </ul>
    </>
  )
}

