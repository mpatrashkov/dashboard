import { Button, Dropdown, Input, Shortcut } from '@devmax/ui';
import { Bell, Search, UserCircle } from 'tabler-icons-react';
import styles from './topbar.module.scss';

/* eslint-disable-next-line */
export interface TopbarProps {}

export function Topbar(props: TopbarProps) {
  return (
    <div className="h-16 flex items-center px-10">
      <div className="flex-1">
        <div className="pl-24">
          <div className="w-[500px]">
            <Input icon={Search} slim fluid placeholder="Press / to search" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <Button slim icon={<Bell />} />
        </div>
        <Button slim icon={<UserCircle />}>
          Miroslav Patrashkov
        </Button>
      </div>
    </div>
  );
}

export default Topbar;
