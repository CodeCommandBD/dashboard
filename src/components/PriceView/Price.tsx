import { cn } from "@/lib/utils";
import PriceFormatter from "./PriceFormate";



interface Props {
        price: number | undefined;
        discount: number | undefined;
        className?: string;
}

const Price = ({ price, discount, className }: Props) => {
    console.log(price);


    return (
        <div className=''>
            <div className={cn('flex items-center gap-2.5', className)}>
                <PriceFormatter amount={price}  className="text-shop_dark_green"></PriceFormatter>
                {price && discount &&  <PriceFormatter amount={price + ((discount * price)/100)} className="line-through text-xs font-normal text-gray-400"></PriceFormatter>}
            </div>
        </div>
    )
}

export default Price