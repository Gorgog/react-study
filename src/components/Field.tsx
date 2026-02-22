import type {HTMLInputTypeAttribute} from "react";

interface Props {
    className?: string;
    id: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    value?: string;
    onInput: (event: React.InputEvent<HTMLInputElement>) => void;
}

const Field = ({className, id, label, type = 'text', onInput, value}: Props) => {
    return (
        <div className={`field ${className}`}>
            <label
                className="field__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                type={type}
                className="field__input"
                id={id}
                value={value}
                placeholder=" "
                autoComplete="off"
                onInput={(event) => onInput(event)}
            />
        </div>
    )
}

export default Field;