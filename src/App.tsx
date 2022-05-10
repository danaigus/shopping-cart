import Cart from './components/Cart'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App (): JSX.Element {
  const [dataBelow, setDataBelow] = useState([])
  const [dataAbove, setDataAbove] = useState([])
  const [data, setData] = useState([])

  function getData (): void {
    axios.get('data/abaixo-10-reais.json')
      .then(res => setDataBelow(res.data.items))
      .catch(err => console.error(err))
    axios.get('data/acima-10-reais.json')
      .then(res => setDataAbove(res.data.items))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getData()
  }, [])

  function useDataBelow (): void {
    setData(dataBelow)
  }

  function useDataAbove (): void {
    setData(dataAbove)
  }

  function clearData (): void {
    setData([])
  }

  return (
    <div className="flex flex-col items-center my-8 px-2">
      <div className="flex gap-2 mb-3">
        <button onClickCapture={useDataBelow} className='bg-slate-400 border mb-2 p-2 rounded-md'>
          Abaixo de R$ 10,00
        </button>
        <button onClickCapture={useDataAbove} className='bg-slate-400 border mb-2 p-2 rounded-md'>
          Acima de R$ 10,00
        </button>
        <button onClickCapture={clearData} className='bg-slate-400 border mb-2 p-2 rounded-md'>
          Limpar dados
        </button>
      </div>
      <Cart itemList={data as any}/>
    </div>
  )
}

export default App
