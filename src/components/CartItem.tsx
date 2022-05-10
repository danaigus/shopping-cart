interface CIProps {
  item: {
    image: string
    name: string
    price: string
    sellingPrice: string
  }
}

export default function CartItem ({ item }: CIProps): JSX.Element {
  return (
    <div className='fade flex mx-4 py-2 gap-4 h-1/4'>
      <img src={item.image} alt="produto" className='object-cover w-24 border' />
      <div className='flex flex-col items-start text-sm py-2'>
        <span className='font-bold mb-2'>{item.name}</span>
        <span className='text-xs text-[#a5a5a5]'>{item.price}</span>
        <span className='font-bold'>{item.sellingPrice}</span>
      </div>
    </div>
  )
}
