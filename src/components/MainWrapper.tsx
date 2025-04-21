import { useEffect } from "react";




function MainWrapper() {
    //@ts-ignore
    const tg = window.Telegram.WebApp


    useEffect(() => {
        tg.ready()
        tg.expand()

        // setThemeParams(tg.themeParams || {});
        // tg.onEvent('themeChanged', () => {
        //     setThemeParams(tg.themeParams || {});
        // });

    }, []);
    const closeWebApp = () => {
        tg.close()
    };

    return (
        <div>
            <p>Это приложение запущено внутри Telegram!</p>
            <p>Init Data: {tg.initData}</p>
            <p>User: {tg.initDataUnsafe?.user}</p>
            <button onClick={closeWebApp}>Закрыть приложение</button>
        </div>
    );
}

export default MainWrapper;