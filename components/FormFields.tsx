import type { ComponentPropsWithoutRef } from "react";

type BaseFieldProps = {
  label: string;
  name: string;
  required?: boolean;
};

type TextFieldProps = BaseFieldProps &
  Omit<ComponentPropsWithoutRef<"input">, "name" | "required">;

type TextareaFieldProps = BaseFieldProps &
  Omit<ComponentPropsWithoutRef<"textarea">, "name" | "required">;

type SelectFieldProps = BaseFieldProps &
  Omit<ComponentPropsWithoutRef<"select">, "name" | "required"> & {
    options: string[];
    placeholder: string;
  };

export function TextField({ label, name, required, ...props }: TextFieldProps) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      <input className="field-control" name={name} required={required} {...props} />
    </label>
  );
}

export function TextareaField({ label, name, required, ...props }: TextareaFieldProps) {
  return (
    <label className="block md:col-span-2">
      <span className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      <textarea className="field-control min-h-28 py-3" name={name} required={required} {...props} />
    </label>
  );
}

export function SelectField({
  label,
  name,
  required,
  options,
  placeholder,
  ...props
}: SelectFieldProps) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </span>
      <select className="field-control" name={name} required={required} defaultValue="" {...props}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
