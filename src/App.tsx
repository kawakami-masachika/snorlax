import { useContext } from 'react'
import './App.css'
import { ToastContext } from './toast/ToastProvider';

function App() {
  const toaster = useContext(ToastContext);
    const onOpenToast = () => {
      toaster!.create({
      title: 'テスト',
      description: 'AAAA',
      duration: 3000000,
    })
  }
  return (
    <>
      <button onClick={() => onOpenToast()}>
        OPEN TOAST
      </button>
    </>
  )
}

export default App
