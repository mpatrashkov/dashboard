import { cloneElement, useState } from 'react';
import { ModalProps } from '../modal/modal';

interface IOpenModalFunction {
  (): void;
}

interface IWithModalProps {
  modal: React.ReactElement<ModalProps>;
  children: (open: IOpenModalFunction) => React.ReactNode;
}

export function WithModal(props: IWithModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
    props.modal.props.onClose?.();
  }

  return (
    <>
      {cloneElement(props.modal, {
        isOpen,
        onClose,
      })}
      {props.children(onOpen)}
    </>
  );
}

export default WithModal;
