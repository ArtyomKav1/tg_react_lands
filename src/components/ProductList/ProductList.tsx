import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    { id: 1, title: "apple", price: 51, description: "red" },
    { id: 2, title: "apple2", price: 52, description: "red2" },
    { id: 3, title: "apple3", price: 53, description: "red3" },
    { id: 4, title: "apple4", price: 54, description: "red4" },
    { id: 5, title: "apple5", price: 55, description: "red5" },
    { id: 6, title: "apple6", price: 56, description: "red6" },
]

export type productType = {
    id: number
    title: string
    price: number
    description: string
}
const getTotalPrise = (item: productType[]) => {
    return item.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}


function ProductList() {
    const { tg, queryId } = useTelegram()
    const [addedItems, setAddedItems] = useState<productType[]>([])
    const onAdd = (product: productType) => {
        const alredyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alredyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }
        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `buy ${getTotalPrise(newItems)}`
            })
        }



    }






    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrise(addedItems),
            queryId
        }
        fetch("https://87.228.80.60:8000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    }, [])


    useEffect(() => {
        tg.onEvent("mainButtonCliked", onSendData)
        return () => { tg.offEvent("mainButtonCliked", onSendData) }

    }, [])












    return (
        <div className="flex flex-col justify-center">
            ProductList:
            <div className="flex flex-wrap gap-[15px] justify-center pt-[20px]">
                {products.map((item: productType) => (
                    <ProductItem product={item} onAdd={onAdd} />
                ))}
            </div>

        </div>
    );
}

export default ProductList;