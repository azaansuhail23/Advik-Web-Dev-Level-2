function Learn_Props(props){
  return (
    <>
    <h1>Hello {props.name}</h1> 
    <p>My student {props.name} is living in London.</p>
    <hr></hr>
    </>
    
  )
}



export default function App(){
  return (
    <>
    <Learn_Props  name="Azaan"></Learn_Props>
    <Learn_Props  name="Advik"></Learn_Props>
    <Learn_Props  name="Sanjay"></Learn_Props>
    </>
  )
}

// Next Topic Conditional Rendering : 