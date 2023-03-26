import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { RotateClockwise2 } from 'tabler-icons-react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  rounded?: boolean;
  icon?: JSX.Element;
  fluid?: boolean;
  slim?: boolean;
  loading?: boolean;
  border?: boolean;
  afterIcon?: JSX.Element;
}

export function Button(props: PropsWithChildren<IButtonProps>) {
  const {
    variant = 'secondary',
    fluid,
    rounded,
    icon,
    slim,
    loading = false,
    border = false,
    afterIcon,
    ...rest
  } = props;

  const hoverMap = {
    secondary: 'hover:bg-gray-200',
    primary: 'hover:bg-green-600',
    link: '',
  };

  const activeMap = {
    secondary: 'active:bg-gray-200',
    primary: 'active:bg-green-700',
    link: '',
  };

  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={classNames(
        'flex flex-row items-center justify-center',
        {
          'bg-green-500': variant === 'primary',
          'text-white': variant === 'primary',
          'text-green-500': variant === 'link',
          'rounded-lg': !rounded,
          'rounded-full': rounded,
          'w-full': fluid,
        },
        hoverMap[variant],
        activeMap[variant],
        { 'p-3': variant !== 'link' && !slim },
        { 'px-5': variant !== 'link' && !slim },
        { 'px-2': slim },
        { 'gap-2': !slim },
        { 'gap-1': slim },
        { 'border-2 border-gray-500': border },
        props.className
      )}
    >
      {loading && (
        <span className="absolute animate-spin">
          <RotateClockwise2 />
        </span>
      )}
      {icon && (
        <span
          className={classNames({
            invisible: loading,
          })}
        >
          {icon}
        </span>
      )}
      {props.children && (
        <span
          className={classNames({
            invisible: loading,
          })}
        >
          {props.children}
        </span>
      )}
      {afterIcon && (
        <span
          className={classNames({
            invisible: loading,
          })}
        >
          {afterIcon}
        </span>
      )}
    </button>
  );
}

export default Button;
