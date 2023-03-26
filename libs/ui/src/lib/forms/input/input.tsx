import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';
import {
  ITextFieldBaseProps,
  TextFieldBase,
} from '../text-field-base/text-field-base';

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ITextFieldBaseProps {
  slim?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  props,
  ref
) {
  const { fluid, icon, slim, ...rest } = props;
  return (
    <TextFieldBase {...props}>
      <input
        ref={ref}
        {...rest}
        className={classNames(
          'text-gray-700 hover:bg-hoverGray rounded-lg border-2 border-gray-500 outline-none',
          props.className,
          {
            'pl-[40px]': icon,
            'w-full': fluid,
            'mt-2': !icon && !slim,
            'p-3': !slim,
            'p-2': slim,
          }
        )}
      />
    </TextFieldBase>
  );
});

export default Input;
