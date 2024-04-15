import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

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
    rightLabel,
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
    rightLabel?: JSX.Element
}) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <Label htmlFor={name}>{label}</Label>
                {rightLabel}
            </div>
            {type === 'password' ?
                <PasswordInput
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    required={required}
                    disabled={disabled}
                    className={className}
                    id={id}
                /> :
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
                />}
        </div>

    )
}

const PasswordInput = ({
    onChange,
    value,
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
    label?: string,
    placeholder?: string,
    name?: string,
    required?: boolean,
    disabled?: boolean,
    className?: string,
    id?: string,
    rightLabel?: JSX.Element
}) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    }
    return (
        <div className="flex items-center">
            <Input
                type={visible ? 'text' : 'password'}
                name={name}
                placeholder={placeholder}
                required={required}
                className={className + " w-full"}
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {visible ?
                <EyeOpenIcon
                    onClick={toggleVisibility}
                    className="h-6 w-6 text-gray-500 cursor-pointer absolute right-9"
                />
                :
                <EyeClosedIcon
                    onClick={toggleVisibility}
                    className="h-6 w-6 text-gray-500 cursor-pointer absolute right-9"
                />
            }
        </div>
    )
};