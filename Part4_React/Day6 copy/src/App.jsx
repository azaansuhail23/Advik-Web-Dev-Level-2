//Learn -->  Conditional Rendering : Means you will render something based on the condition.

let student="azaan"; 

export default function App(){
  return (
    <>
    {
      
    student=="Azaan" ?(<h1>{student} is my student</h1>):
    (<h1>{student} is not my student</h1>)

    }
    </>
  )
}

// Next Topic Conditional Rendering : 