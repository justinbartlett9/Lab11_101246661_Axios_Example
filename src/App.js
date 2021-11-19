import logo from "./logo.svg";
import "./App.css";
import PersonList from "./PersonList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <PersonList />
    </div>
  );
}

export default App;
