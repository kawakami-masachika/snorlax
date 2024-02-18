import { useContext } from 'react'
import './App.css'
import { ToastContext } from './toast/useToaster';
import { Test } from './Test';

function App() {
  const toaster = useContext(ToastContext);
    const onOpenToast = () => {
      toaster!.create({
      title: 'テスト',
      description: 'AAAA',
      duration: 3000,
    })
  }
  return (
    <>
      <Test/>
      <button onClick={() => onOpenToast()}>
        OPEN TOAST
      </button>
    </>
  )
}

export default App
