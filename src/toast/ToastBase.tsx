import { Toast } from "@ark-ui/react/toast";
import { CreateRenderToaster } from "./useToaster";

export const toastElement: CreateRenderToaster = (toast) => {
  return (
    <Toast.Root>
      <Toast.Title>{toast.title}</Toast.Title>
      <Toast.Description>{toast.description}</Toast.Description>
      <Toast.CloseTrigger>Close</Toast.CloseTrigger>
    </Toast.Root>
  );
}