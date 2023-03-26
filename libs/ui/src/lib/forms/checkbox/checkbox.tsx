import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { ChangeHandler } from 'react-hook-form';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  onChange?: ChangeHandler;
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ICheckboxProps>
>(function Checkbox(props, ref) {
  const { children, ...rest } = props;

  return (
    <label className="flex flex-row items-center gap-2">
      <input
        type="checkbox"
        className="accent-green-600 focus:accent-green-700 text-white w-[25px] h-[25px] rounded-sm"
        {...rest}
        onChange={(e) => props.onChange?.(e)}
        ref={ref}
      />
      {props.label ?? ''}
    </label>
  );
});

export default Checkbox;
