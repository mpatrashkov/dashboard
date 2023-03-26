import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Button from '../button/button';
import Card from '../card/card';

/* eslint-disable-next-line */
export interface ModalProps {
  isOpen?: boolean;
  onClose?(): void;
}

export function Modal(props: ModalProps) {
  function onClose() {
    props.onClose?.();
  }

  return (
    <Dialog open={props.isOpen ?? false} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="-mt-24 max-w-2xl">
          <Card>
            <Dialog.Title className="text-2xl font-bold pb-5">
              Deactivate account
            </Dialog.Title>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <div className="flex pt-5">
              <Button variant="primary" onClick={onClose}>
                Deactivate
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </Card>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
