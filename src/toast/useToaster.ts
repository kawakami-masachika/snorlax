import { CreateToasterProps, CreateToasterReturn, createToaster } from "@ark-ui/react"
import { toastElement } from "./ToastBase";
import { createContext, useContext } from "react";


export const ToastContext = createContext<CreateToasterReturn[1] | undefined>(undefined);

export const useToastContextValue = () => {
  return useContext(ToastContext);
}

export type CreateRenderToaster = CreateToasterProps['render'];
export const useToaster = () => {
  const [Toaster, toast] = createToaster({
    render: toastElement,
    placement: 'top',
  });
  return {
    Toaster,
    toast,
  }
}