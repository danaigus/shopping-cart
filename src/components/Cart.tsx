import { useEffect, useState } from 'react'
import CartItem from './CartItem'

interface CProps {
  itemList: [{
    imageUrl: string
    name: string
    price: number
    sellingPrice: number
  }]
}

export default function Cart ({ itemList }: CProps): JSX.Element {
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    if (itemList) {
      const sum = itemList.reduce((acc, item) => acc + item.sellingPrice, 0)
      setTotalValue(sum)
    }
  }, [itemList])

  function convertToBRLString (input: number): string {
    const dec = input / 100
    return dec.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className='max-w-md w-full flex flex-col divide-y bg-white rounded-lg shadow-lg text-center'>
      <div className='font-bold py-3'>
        Meu carrinho
      </div>
      <div className='flex flex-col h-[28rem] overflow-auto'>
        {itemList.length < 1 &&
          <span className='flex justify-center items-center h-full'>
            Nada no carrinho!
          </span>
        }
        {itemList.map((item, i) =>
          <CartItem key={i} item={{
            image: item.imageUrl,
            name: item.name,
            price: convertToBRLString(item.price),
            sellingPrice: convertToBRLString(item.sellingPrice)
          }}/>
        )}
      </div>
      <div className='flex flex-col gap-4 items-center py-6 px-4'>
        <div className="flex justify-between font-bold w-full">
          <span>Total</span>
          <span>{convertToBRLString(totalValue)}</span>
        </div>
        {totalValue > 1000 &&
          <span className='fade inline-block max-w-xs w-full leading-10 text-sm text-[#217a00] bg-[#c7ffa6] rounded-full'>
            Parabéns, sua compra tem frete grátis!
          </span>
        }
      </div>
      <div className='p-4'>
        <button className='bg-[#3b74f2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full disabled:bg-gray-400 disabled:hover:bg-gray-400'>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
