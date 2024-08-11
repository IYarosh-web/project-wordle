import AnswerProvider from '../../providers/answerProvider';
import Game from '../Game';
import Header from '../Header';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <AnswerProvider>
          <Game />
        </AnswerProvider>
      </div>
    </div>
  );
}

export default App;
