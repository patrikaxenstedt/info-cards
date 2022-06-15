import CreateContact from "./components/CreateContact";
import DisplayContacts from "./components/DisplayContacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CreateContact />
      <DisplayContacts />
      <p>Dipslay the components here</p>
    </div>
  );
}

export default App;
