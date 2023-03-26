import classNames from 'classnames';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface ICardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  slim?: boolean;
}

export function Card(props: PropsWithChildren<ICardProps>) {
  const { slim, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames('shadow-md rounded-lg bg-white', props.className, {
        'p-5': !slim,
      })}
    >
      {props.children}
    </div>
  );
}

export default Card;
