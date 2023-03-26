import { PropsWithChildren } from 'react';
import { Icon } from 'tabler-icons-react';

export interface ITextFieldBaseProps {
  icon?: Icon;
  className?: string;
  label?: string;
  fluid?: boolean;
  required?: boolean;
  name?: string;
}

export function TextFieldBase(props: PropsWithChildren<ITextFieldBaseProps>) {
  const { children, fluid, required, ...rest } = props;

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] flex justify-center">
        {rest.icon && <rest.icon color="#726E75"></rest.icon>}
      </div>
      {rest.label && (
        <label htmlFor={rest.name} className="font-bold">
          {rest.label}{' '}
          {required && <span className="text-red-700 font-normal">*</span>}
        </label>
      )}
      <div>{children}</div>
    </div>
  );
}

export default TextFieldBase;
