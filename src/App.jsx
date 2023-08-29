
import './App.css'

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  },
]



function App() {
    return (
      <>
    <div>
      {users.map((x)=>(
        <div>{x.age}, {x.name}</div>
      ))}
      </div>
    

    </>
    )
}

export default App
