import './App.css';
import Select from 'react-select';

function App() {
  const options = [
    {
      value: 'value1',
      label: 'Label 1',
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: '15rem'}}>
          <Select 
            options={options}
            placeholder='My Select'
          />
        </div>
      </header>
    </div>
  );
}

export default App;
