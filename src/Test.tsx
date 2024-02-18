import { useContext } from "react";
import { ToastContext } from "./toast/useToaster"

export const Test = () => {
  const toaster = useContext(ToastContext);

    const onOpenToast = () => {
      toaster!.create({
      placement: 'top',
      title: 'TESTです',
      description: 'AAAABBBB',
      duration: 3000,
    })
  }

  return (
    <>
      <button onClick={() => onOpenToast()}>
        OPEN TOAST TEST
      </button>
    </>
  )
}