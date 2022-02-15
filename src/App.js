import './App.css';
import { responses } from './responses'
import Question from './Question';

function App() {

  return (
    <div className="container">
      <h1>questions and answers about login</h1>
      <div className="question-container">
        {
          responses.map((response) => {
            return <Question key={response.id} {...response} />
          })
        }
      </div>
    </div>
  );
}

export default App;
