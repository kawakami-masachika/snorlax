import { CreateToasterProps, createToaster } from "@ark-ui/react"
import { createContext } from "react";
import { toastElement } from "./ToastBase";

// NOTE 今後追加なので、一旦Objectの形式で定義
type Params = {
  placement?: CreateToasterProps['placement']
}
export type CreateRenderToaster = CreateToasterProps['render'];
export const useToaster = (props: Params) => {
  const [Toaster, toast] = createToaster({
      render: toastElement,
      placement: props.placement || 'top',
    },
  );
  const toastContext = createContext(toast)
  return {
    toastContext,
    Toaster,
  }
}