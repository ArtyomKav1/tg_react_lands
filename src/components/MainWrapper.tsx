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
        <div className="flex flex-col justify-center">
            <p className="text-[32px] text-center ">Это приложение запущено внутри Telegram!</p>
            <div className="flex flex-col border rounded-[8px] bg-amber-100">
                <p>Init Data: {tg.initData}</p>
                <p>User: {tg.initDataUnsafe?.user}</p>
                <div>{tg.map((item) => <div>{item}</div>)}</div>
            </div>
            <button onClick={closeWebApp} className="py-[10px] px-[20px] bg-amber-400">Закрыть приложение</button>
        </div>
    );
}

export default MainWrapper;