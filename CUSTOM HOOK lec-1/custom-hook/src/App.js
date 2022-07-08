
import './App.css';
import useFetch from './Hooks/useFetch';
import useTimeout from './Hooks/useTimeout';

function App() {
  const ready=useTimeout()
  const{data,loading,error}=useFetch()
  return (
    <div className="App">
      <h1>CUSTOM HOOK</h1>
      <div>{ready ? "Ready" :"NOT-READY"}</div>
      <br/> 
      <br/> 
      <br/> 
      <div>
         {loading && "Loading"}
        {data.map((el)=>(
         <div key={el.id}>
          <img width="20%" src={el.image} alt=""/>
         <h2>Title:{el.title}</h2>
             <h2>Price:{el.price}</h2>
             <h2>Rating:{el.rating.rate}</h2>
         </div>
      ))}</div>
    </div>
  );
}

export default App;
