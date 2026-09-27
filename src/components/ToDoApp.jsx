import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdAddCard } from "react-icons/md";

let stylecontent ={
    backgroundColor :"#ADEFD1",
    color :"#010e1c",
    boxShadow : "1px 3px 5px black"
}

let Button = styled.button
`
  background-color : #ADEFD1;
  color : #010e1c;
  width : 100px;
  height :50px;

`
 
 let User = "Harshavarthini palanivel"

function something(User){
  console.log(User);
  
}
const ToDoApp = ({user})=>{

  let [items,setItems]=useState([
    {id :1, label:"html&css",checked:true  },
    {id :2,label:"java script",checked:true},
    {id :3,label:"react js",checked:false},
  ]);

  let [newitem,setnewitem]=useState("");
  let [isediting,setisediting]=useState(false);
  let [currentele,setcurrentele]=useState(null);

  let handlechecked =(id)=>{
    let newlistitem =items.map( (item)=>{return item.id===id ?{...item,checked:!item.checked}:item;})   
    setItems(newlistitem)
  };

  let handleupdate =(id)=>{
    let listitem = items.find(item =>item.id===id);
    setnewitem(listitem.label)
    setisediting(true);
    setcurrentele(id);
  };

  let handledelete =(id)=>{
    let newitems = items
      .filter((item )=>item.id!=id)
      .map((item,index)=>{
        return { ...item,id : index+1};
      });

    setItems(newitems);
  };

  let handleaddorsave=()=>{
    if(isediting){
      let newlistitem = items.map((item)=>{
        return item.id === currentele ? {...item,label:newitem}:item
      })
      setItems(newlistitem)
      setcurrentele(null)
      setnewitem("")
      setisediting(false)
    }
    else{
      setItems([...items,{id:items.length+1, label:newitem,checked:false}]);
      setnewitem(" ");
    }
    
  }



  return(
    <main>
        {/*<h1 style={stylecontent}>Main Content</h1>
        <Button onClick={()=>{something(User)}}>Click Me</Button>
        <CounterApp></CounterApp>*/}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input type="text" value={newitem} placeholder="Add new Item" onChange={ (e)=>{setnewitem(e.target.value);}}  style={{width: "230px",height: "35px",fontSize: "18px"}}/>
          <button id="addorsave" onClick={()=>{handleaddorsave()}}>{isediting ? <MdSystemUpdateAlt color='blue' size={25} /> :<MdAddCard color='green' size={30} />}</button>
        </div>
          {
            items.map((item)=>{
              return (

                <li key={item.id} className="item">
                  <input type="checkbox" checked={item.checked} onChange={()=>handlechecked(item.id)} />
                  <label >{item.label}</label>
                  <FaEdit id="edit" role="button" onClick={()=>handleupdate(item.id)}/>
                  <FaRegTrashAlt id="delete" role="button" onClick={()=>handledelete(item.id)} />
                </li>
              )
            }
          )
          }
    </main>
  )
};

export default ToDoApp