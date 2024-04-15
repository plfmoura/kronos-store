import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InputText({
    onChange,
    value,
    type,
    label,
    placeholder,
    name,
    required,
    disabled,
    className,
    id,
}: {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    type?: string,
    label?: string,
    placeholder?: string,
    name?: string,
    required?: boolean,
    disabled?: boolean,
    className?: string,
    id?: string,
}) {
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            <Input
                onChange={onChange}
                value={value}
                type={type}
                placeholder={placeholder}
                name={name}
                required={required}
                disabled={disabled}
                className={className + ' '}
                id={id}
            />
        </div>

    )
}
