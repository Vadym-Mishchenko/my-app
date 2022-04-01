import { Form } from './Components/Form/Form';
import { Messege } from './Components/Messege/Messege';

import './App.scss';
import { HelpTypes } from './Components/HelpTypes/HelpTypes';

function App() {
  return (
    <div className="app">
      <Messege />
      <Form />
      <HelpTypes />
    </div>
  );
}

export default App;
