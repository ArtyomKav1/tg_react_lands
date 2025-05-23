import { productType } from "./ProductList";




function ProductItem(props: { product: productType, onAdd: (product: productType) => void, added: boolean }) {

    const onAddHandler = () => {
        props.onAdd(props.product)
    }

    return (
        <div className={`flex flex-col justify-center  w-[45%] border rounded-[8px] p-[5px] ${props.added ? "opacity-50" : "opacity-100"}`}>
            <div>{props.product.title}</div>
            <div>{props.product.description}</div>
            <div><span>Стоимость: <b>{props.product.price}</b></span></div>
            <button onClick={onAddHandler} className="bg-gray-600 text-white rounded-[8px] border py-[5px]">{!props.added ? "Добавить в корзину" : "Удалить из корзины"}</button>
        </div>
    );
}

export default ProductItem;