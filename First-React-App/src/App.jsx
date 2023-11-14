import './App.css';
import Chicken from "./Chicken";
import Greeter from './Greeter';
import Die from './Die';

function App() {
return (
<div>
  {/*<Greeter person="stefanos" from="rex" />
  <Greeter person="Niki" from="rex" />
<Greeter person="Xristofore" from="tina" />*/}
<Die  numSides={20} />
<Die numSides={6} />
<Die  numSides={10} />
</div>

);
};

export default App;
