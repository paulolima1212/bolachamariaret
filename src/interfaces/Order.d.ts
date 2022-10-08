export interface OrderProps{
    client:string
    id?: string
    items:ItemsProps[]
    paymethod?: string
    table:string
    totalpay?: string 
}

export interface ItemsProps{
    name:string
    price:number
    qtd:number 
    id?: string
}

