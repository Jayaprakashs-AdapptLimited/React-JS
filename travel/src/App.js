import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Shorts", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div className='app'> 
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
   
  );
}

function Logo() {
  return (
    <> 
    <h1> Far away </h1>
    </>
  )
}
function Form() {
  return (
    <form className='add-form'> 
      <h3> Need for your Trip </h3>
      <select> 
        {Array.from({length: 20}, (_, i) => i + 1 ).map((num) => <option value={num} key={num}> {num} </option>)}

      </select>
      <input type='text' placeholder='Item...' />
      <button> Add </button>
    </form>
  )
}
function PackingList() {
return (
  <div className='list'> 
  <ul> 
    {initialItems.map(item => <Item item={item} key ={item.id} />)}
  </ul>
  </div>
)
}

function Item({item}) {
  return (
    <div> 
    <li> <span style={item.packed ? {textDecoration: 'line-through'} : {}}> {item.quantity} {item.description} </span> <button> ❌ </button></li>
    </div>
  )
  
}
function Stats() {
  return (
    <footer className='stats'> 
      <em>  You have X items on your list and you already packed X(X%) </em>
    </footer>
  )
}
export default App;
