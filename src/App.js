import './App.css';
import Header from './components/Header/Header';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      {/* hearder section */}
      <Header></Header>
      {/* displaying all data in ui  */}
      <Team></Team>
    </div>
  );
}

export default App;
