import {useField} from "formik";

interface CheckBox{
    id: string
    value: string
    checked: boolean
}
export const RadioInput = ({label, checkBoxes, ...props}: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid, and it has been touched (i.e. visited)
    const [field] = useField(props);
    return (
        <>
            <div className="form-group">
                <label htmlFor={props.id || props.name}>{label}</label>
                <br/>
                <div className="d-flex">
                { checkBoxes.map((checkbox:CheckBox, index: number) => {
                    return <label htmlFor={checkbox.id} key={index} className="d-flex mr-3 align-items-center">
                        <input className="form-radio-label" type="radio" {...field} {...checkbox} name={props.name} checked/>
                        <span className="ml-1 form-radio-span">{checkbox.value}</span>
                    </label>
                }) }
                </div>
            </div>
        </>
    );
};
