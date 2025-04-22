
import { useTelegram } from "../../hooks/useTelegram";




function Header() {
    const { tg, onClose, onToggleButton } = useTelegram()
    return (
        <div className="  flex flex-col pt-[10px]">
            <div className="flex justify-between ">
                <div className="flex flex-col border rounded-[8px] bg-gray-600 text-white w-[48%] p-[5px]">
                    <p>Init Data: {tg.initData}</p>
                    <p>User: {tg.initDataUnsafe?.user}</p>
                </div>
                <button
                    onClick={onClose}
                    className="w-[48%] py-[10px] px-[20px] bg-theme-button-tg rounded-[8px] text-theme-button-text-tg">
                    Закрыть приложение
                </button>
            </div>
            <button
                onClick={onToggleButton}
                className="py-[10px] px-[20px] bg-theme-button-tg rounded-[8px] mt-[15px] text-theme-button-text-tg">
                btn
            </button>
        </div>
    );
}

export default Header;