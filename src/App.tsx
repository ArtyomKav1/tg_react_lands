import { useEffect, useState } from 'react';
import './App.css';

// Типы для ThemeParams (опционально)
type ThemeParams = {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
};

function App() {
  const [themeParams, setThemeParams] = useState<ThemeParams>({});
  const [isWebApp, setIsWebApp] = useState(false);

  useEffect(() => {
    // Проверяем, что находимся в Telegram WebApp
    //@ts-ignore
    if (window.Telegram?.WebApp) {
      //@ts-ignore
      const tg = window.Telegram.WebApp;
      setIsWebApp(true);

      // Инициализируем WebApp
      tg.ready();
      tg.expand(); // Раскрываем на весь экран

      // Получаем параметры темы
      setThemeParams(tg.themeParams || {});

      // Подписываемся на изменение темы
      tg.onEvent('themeChanged', () => {
        setThemeParams(tg.themeParams || {});
      });

      // Можно получить данные пользователя
      console.log('Init Data:', tg.initData);
      console.log('User:', tg.initDataUnsafe?.user);
    }
  }, []);

  // Стили под текущую тему
  const appStyle = {
    backgroundColor: themeParams.bg_color || '#ffffff',
    color: themeParams.text_color || '#000000',
    minHeight: '100vh',
    padding: '20px'
  };

  const closeWebApp = () => {
    //@ts-ignore
    if (window.Telegram?.WebApp) {
      //@ts-ignore
      window.Telegram.WebApp.close();
    }
  };

  return (
    <div style={appStyle}>
      <h1>Telegram WebApp Demo</h1>

      {isWebApp ? (
        <>
          <p>Это приложение запущено внутри Telegram!</p>
          <button
            onClick={closeWebApp}
            style={{
              backgroundColor: themeParams.button_color || '#0088cc',
              color: themeParams.button_text_color || '#ffffff',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            Закрыть приложение
          </button>

          <div style={{ marginTop: '20px' }}>
            <h3>Параметры темы:</h3>
            <pre>{JSON.stringify(themeParams, null, 2)}</pre>
          </div>
        </>
      ) : (
        <p>Запустите это приложение через Telegram-бота.</p>
      )}
    </div>
  );
}

export default App;