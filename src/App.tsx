
import './App.css';
import ErrorDevice from './components/ErrorDevice';
import MainWrapper from './components/MainWrapper';

function App() {
  //@ts-ignore
  const isWebApp = window.Telegram?.WebApp
  return (
    <div >
      <h1>Telegram WebApp Demo</h1>
      {isWebApp ? <MainWrapper/> : <ErrorDevice />}
    </div>
  );
}

export default App;