import Button from './components/Button';
import Navbar from './components/Navbar';
// import { Image } from 'next/image';


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

function Advik(){
  return (
    <>
    <h4>My good name is Advik and my age is 11</h4>
    <p>I am learning React</p> 
    </>
  )
}

function App() {
  return (
    <>
      <h1>Advik : Day 3 Learning Phase of React</h1>
      <Button></Button>
      <Navbar></Navbar>

      <Advik></Advik>

      {/* LEARN : How to use/add javascript in jsx */}

      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}></img>
    </>
  )
}

export default App


/* function wrong(){
  return (
    <div>I am Azaan Suhail</div> 
    <p>I am advik learning react from azaan</p>
  )
} */

// NOTE : You cannot return more than one HTML tag as jsx. Only one parent tag is valid or empty wrapper ( <> </>)

// Tool HTML to JSX converter : https://transform.tools/html-to-jsx  


// HOMEWORK : https://react.dev/learn --Read before conditional rendering.