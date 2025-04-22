
import './App.css';
import ErrorDevice from './components/ErrorDevice';
import MainWrapper from './components/MainWrapper';

function App() {
  //@ts-ignore
  const isWebApp = window.Telegram?.WebApp
  return (
    <div className='p-[10px]'>
      <h1 className='opacity-50'>Telegram WebApp Demo</h1>
      {isWebApp ? <MainWrapper /> : <ErrorDevice />}
    </div>
  );
}

export default App;