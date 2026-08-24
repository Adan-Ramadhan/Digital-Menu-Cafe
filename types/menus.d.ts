interface MenusResponseType {
    success: boolean
    message: string
    data: MenusListType[]
}

interface MenusListType {
    id: number
    title: string
    description: string
    price: number,
    category: string
    image: string
    isBestSeller: boolean,
    isAvailable: boolean

}