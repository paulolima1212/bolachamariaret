import { useAppContext } from '../../contexts/AppContext'
import { useApi } from '../../hooks/useApi';
import Pedido from '../Pedido'
import './style.scss'

export default function ContainerPedidos() {

    function handleGetOrders(){
        const { data } = useApi('/getallorders')
        console.log(data);
        if(!data) return <h1>loading...</h1>
        return(
            data.map((order:any) => {
                return(
                    <Pedido client={order.client} items={order.items} table={order.table} id={order.id}/>
                )
            })
        )
    }

    return (
        <div className="container-pedidos">
            <div className="title-pedido">
                <h3>PEDIDOS PENDENTES</h3>
            </div>
            {handleGetOrders()}
        </div>
    )
}