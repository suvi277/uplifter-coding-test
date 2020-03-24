import React from 'react';
export interface SelectProps {
    allOptions: string[];
    label: string;
}

const Select: React.SFC<SelectProps> = ({ allOptions, label }) => {
    return (
        <div className="input-group input-group-sm mt-3">
            <div className="input-group-prepend">
                <label className="input-group-text">{label}</label>
            </div>
            <select className="custom-select">
                {allOptions.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
