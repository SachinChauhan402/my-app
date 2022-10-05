// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Msg name="Sachin" pic="https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=480&h=320"/>
//       <Msg name="Kitto" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO94d_oq6A5_h3ZMkyeLhN5U-nOc3-ytxu6dIx6nr_Dw&s"/>
//       <Msg name="Kriyansh" pic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-168504892-1568303467.png?crop=0.754xw:0.911xh;0.191xw,0.0454xh&resize=640:*"/>
     
//     </div>
//   );
// }

function App() {
  const users = [
      {name:"sachin",
      pic:"https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=480&h=320"}
      ,{
        name:"kitto",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO94d_oq6A5_h3ZMkyeLhN5U-nOc3-ytxu6dIx6nr_Dw&s"
      },
      {
        name:"kriyansh",
        pic:"https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=600"
      }

  ];
  return (
    <div className="App">
      {/* <Welcome name="Sachin" />
      <Welcome name="Kitto" />
      <Welcome name="Kriyansh" /> */}
     {users.map(({ name ,pic}) => ( <Welcome name={name} pic={pic} />))}
    </div>
  );
}

  // function Msg({ name , pic}){
  //  return(
  //   <div>
  //     <img className="Profile-pic" src={pic} alt={name}/>
  //     <h1>Hello, { name  }, 😂😎🎶🤞🤦‍♀️😜</h1>
  //   </div>
  //  )
  // };

  function Welcome({ name ,pic}){
    return(
     <div>
       <img className="Profile-pic" src={pic} alt={name}/>
       <h1>Hello, { name  }, 😂😎🎶🤞🤦‍♀️😜</h1>
     </div>
    )
   };


export default App;
