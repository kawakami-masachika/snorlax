import { useContext } from 'react'
import './App.css'
import { useToaster } from './toast/useToaster'
function App() {

  const { toastContext, Toaster } = useToaster({placement: 'top-end'});
  const toaster = useContext(toastContext);
    // 
    const onOpenToast = () => {
      toaster.create({
      title: 'テスト',
      description: 'AAAA',
      duration: 3000,
    })
  }
  return (
    <>
      <Toaster/>
      <button onClick={() => onOpenToast()}>
        OPEN TOAST
      </button>
    </>
  )
}

export default App
