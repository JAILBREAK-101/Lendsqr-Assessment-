import {useField} from "formik";

export const TextVanityURLInput = ({label, ...props}: any) => {

    const [field, meta] = useField(props);

    return (
        <>
            <div className="form-group">
                <label htmlFor={props.id || props.name}>{label}</label>

                <div className="input-group mb-3">
                    <span className="input-group-text fs-12">{props.url}</span>
                    <input className="form-control" type="text" {...field} {...props} />
                </div>
                <div id="textHelp" className="form-text fs-12">{props.helptext}</div>

                {meta.touched && meta.error && <>
                    <div className="text-danger small mt-2">{meta.error}</div>
                </>}
            </div>
        </>
    );
};
