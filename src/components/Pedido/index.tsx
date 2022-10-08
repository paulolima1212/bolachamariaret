import { OrderProps } from '../../interfaces/Order'
import './style.scss'

export default function Pedido({client, table, items, id}: OrderProps) {

    function handleLoadItems(){
        return(
            items.map((item) => {
                return(
                    <span key={item.id}>{item.name}</span>
                )   
            })
        )

    }
    return (
        <div className="content-pedido">
            <div key={id} className="client">
                <span>Client:</span>
                <span>{client}</span>
                <span>Mesa:</span>
                <span>{table}</span>
            </div>
            <div className="items">
                {handleLoadItems()}
            </div>
        </div>
    )
}