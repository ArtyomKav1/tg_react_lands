import { useEffect } from "react";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";
import { useTelegram } from "../hooks/useTelegram";




function MainWrapper() {

    const { tg } = useTelegram()


    useEffect(() => {
        tg.ready()
        tg.expand()
        // setThemeParams(tg.themeParams || {});
        // tg.onEvent('themeChanged', () => {
        //     setThemeParams(tg.themeParams || {});
        // });
    }, []);

    console.log(tg)
    return (
        <div className="flex flex-col justify-center ">
            <Header />
            <Routes>
                <Route path={"/"} element={<ProductList />} />
                <Route path={"/form"} element={<Form />} />
            </Routes>
        </div>
    );
}

export default MainWrapper;