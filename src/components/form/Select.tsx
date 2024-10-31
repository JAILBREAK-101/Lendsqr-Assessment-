import {useField} from "formik";

export const Select = ({label, options, placeholder, optionvalue, optionkey,  ...props}: any) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field}  {...props} className="form-control" >
                <option value="">{placeholder}</option>
                {
                    options.map((option:any, index: number) =>
                        <option value={optionkey !== null ? option[optionkey]: index} key={index}>{option[optionvalue]}</option>
                    )
                }
            </select>
            {meta.touched && meta.error && <>
                <div className="text-danger small mt-2">{meta.error}</div>
            </>}
        </div>
    );
};
