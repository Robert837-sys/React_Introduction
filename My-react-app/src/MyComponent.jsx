import React,{useState}from 'react'


const MyComponent = () => {
  const [name,setName]=useState("Guest");
  const [age,setAge]=useState(0);
  const [isEmployed,setIsEmployed]=useState(false);
  const updateName=()=>{
    setName("Robert");
  }
  const incrementAge=()=>{
    setAge(age+1);
  }
  const toggleEmployedStatus=()=>{
    setIsEmployed(!isEmployed);
  }
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>setName</button>
      <p>Age:{age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed:{isEmployed? "Yes":"No"}</p>
      <button onClick={toggleEmployedStatus}>Employment Status</button>
    </div>
  )
}

export default MyComponent
