import { Menu } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import Card from '../card/card';

/* eslint-disable-next-line */
export interface DropdownProps {}

export function Dropdown(props: PropsWithChildren<DropdownProps>) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>{props.children}</Menu.Button>
      <Menu.Items className="absolute origin-top-right right-0">
        <Card className="flex flex-col">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Card>
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
