import classNames from 'classnames';
import { forwardRef, SelectHTMLAttributes } from 'react';
import {
  ITextFieldBaseProps,
  TextFieldBase,
} from '../text-field-base/text-field-base';

interface IInputProps<T>
  extends SelectHTMLAttributes<HTMLSelectElement>,
    ITextFieldBaseProps {
  options?: Array<ISelectOption<T>>;
  slim?: boolean;
}

export interface ISelectOption<T> {
  label?: string;
  value?: string;
}

export const Select = forwardRef<HTMLSelectElement, IInputProps<any>>(
  function Select(props, ref) {
    const { slim, options, icon, fluid, ...rest } = props;
    return (
      <TextFieldBase {...props}>
        <select
          {...rest}
          ref={ref}
          className={classNames(
            'bg-white text-gray-700 hover:bg-hoverGray rounded-lg px-3 border-2 border-gray-500 outline-none',
            props.className,
            {
              'pl-[40px]': icon,
              'w-full': fluid,
              'mt-2': !icon && !slim,
              'h-[52px]': !slim,
              'h-[44px]': slim,
            }
          )}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </TextFieldBase>
    );
  }
);

export default Select;
