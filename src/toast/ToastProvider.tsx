import { createContext } from "react";
import { ToastPlacement, useToaster } from "./useToaster";
import { CreateToasterReturn } from "@ark-ui/react";

type Props = {
  children: React.ReactNode;
  placement: ToastPlacement;
}

export const ToastContext = createContext<CreateToasterReturn[1] | undefined>(undefined);

export const ToastProvider = (props: Props) => {
  const {Toaster, toast} = useToaster({placement: props.placement, closeButtonLabel: '閉じる'});
    return (
    <ToastContext.Provider value={toast}>
      <Toaster/>
      {props.children}
    </ToastContext.Provider>
  )
}
