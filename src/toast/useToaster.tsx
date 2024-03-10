import { CreateToasterProps, Toast, createToaster } from "@ark-ui/react"

export type CreateRenderToaster = CreateToasterProps['render'];
export type ToastPlacement = CreateToasterProps['placement'];
export type Props = {
  closeButtonLabel?: string;
  placement: ToastPlacement;
}

export const useToaster = (props: Props) => {
  const [Toaster, toast] = createToaster({
    placement: props.placement,
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>{props.closeButtonLabel}</Toast.CloseTrigger>
        </Toast.Root>
      )
    },
  });
  return {
    Toaster,
    toast,
  }
}
