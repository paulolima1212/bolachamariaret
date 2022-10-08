import { useAppContext } from '../../contexts/AppContext'
import { useApi } from '../../hooks/useApi'
import './style.scss'

export default function ContainerResumo() {

    function handleLoadItemsOrder(){
        const { data } = useApi('/getallorders')
        console.log(data);
        if(!data) return <h1>loading...</h1>

        return(
            data.map((order:any) => {
                return(
                    order.items.map((item:any) => {
                        return(
                            <span className='items-resumo' key={item.id}>{item.name}</span>
                        )
                    })
                )
            })
        )
    }
    return (
        <div className="container-resumo">
            <h3>RESUMO PEDIDOS</h3>
            <div className="pedidos">
                {handleLoadItemsOrder()}
            </div>
        </div>
    )
}