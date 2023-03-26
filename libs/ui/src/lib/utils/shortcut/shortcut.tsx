import styles from './shortcut.module.css';
import Hotkeys from 'react-hot-keys';
import { PropsWithChildren, useRef } from 'react';

export interface ShortcutProps {
  keys: string;
}

export function Shortcut(props: PropsWithChildren<ShortcutProps>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Hotkeys
      keyName={props.keys}
      onKeyDown={() => {
        (ref.current?.firstChild as HTMLElement)?.focus();
        // ref.current?.focus()
      }}
    >
      <div ref={ref}>{props.children}</div>
    </Hotkeys>
  );
}

export default Shortcut;
