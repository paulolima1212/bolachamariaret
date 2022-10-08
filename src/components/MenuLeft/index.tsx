import { IconMessage, IconP } from '../../assets/icons'
import './style.scss'

export default function MenuLeft() {
    return (
        <div className="menu-left">
            {IconP}
            <ul>
                <li>
                    <a href="#">
                        <span className='icons-menu'>{IconMessage}</span>
                        <span className='title-menu'>PEDIDOS PENDENTES</span>
                    </a>
                </li>
                <li>
                    
                    <a href="#">
                        <span className='icons-menu'>{IconMessage}</span>
                        <span className='title-menu'>PAGAMENTOS</span>
                    </a>
                </li>
                <li>
                    
                    <a href="#">
                        <span className='icons-menu'>{IconMessage}</span>
                        <span className='title-menu'>CHAMADAS</span>
                    </a>
                </li>
                <li>
                    
                    <a href="#">
                        <span className='icons-menu'>{IconMessage}</span>
                        <span className='title-menu'>PEDIDOS PRONTOS</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}