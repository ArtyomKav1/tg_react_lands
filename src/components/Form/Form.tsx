import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";





function Form() {
    const { tg } = useTelegram()
    const [country, setCountry] = useState<string>()
    const [sity, setSity] = useState<string>()
    const [subject, setSubject] = useState<string>()

    const onSendData = useCallback(() => {
        const data = {
            country,
            sity,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, sity, subject])
    useEffect(() => {
        tg.onEvent("mainButtonCliked", onSendData)
        return () => { tg.offEvent("mainButtonCliked", onSendData) }

    }, [])


    useEffect(() => {
        tg.MainButton.setParams({
            text: "Send Data"
        })
    }, [])

    useEffect(() => {
        if (!country || !sity) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, sity])

    const countryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }
    const sityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSity(e.target.value)
    }
    const subjectHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value)
    }

    return (
        <div className="flex flex-col justify-center pt-[20px] gap-[15px]">
            <input type="text"
                className=" h-[60px] text-[22px] px-[20px] border rounded-[8px]"
                value={country}
                onChange={countryHandler}
                placeholder="Country"
            />
            <input type="text"
                className=" h-[60px] text-[22px] px-[20px] border rounded-[8px]"

                value={sity}
                onChange={sityHandler}
                placeholder="Sity"
            />
            <select
                value={subject}
                onChange={() => subjectHandler}
                className=" h-[60px] text-[22px] px-[20px] border rounded-[8px]"
            >
                <option value="physical" >Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
}

export default Form;