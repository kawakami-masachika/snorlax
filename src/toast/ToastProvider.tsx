import { ToastContext, useToaster } from "./useToaster";

type Props = {
  children: React.ReactNode
}
export const ToastProvider = (props: Props) => {
  const {Toaster, toast} = useToaster();
    return (
    <ToastContext.Provider value={toast}>
      <Toaster/>
      {props.children}
    </ToastContext.Provider>
  )
}
