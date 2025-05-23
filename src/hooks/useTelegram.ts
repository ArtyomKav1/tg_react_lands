



export const useTelegram = () => {
    //@ts-ignore
    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        onToggleButton, 
        queryId: tg.initDataUnsafe?.query_id
    }
}