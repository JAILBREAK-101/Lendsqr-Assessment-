export const FormSuccess = (props: { formSuccess: string }): JSX.Element => {
    return <>
        {
            props.formSuccess && <div className="alert alert-success">
                <p className="mb-0">{props.formSuccess}</p>
            </div>
        }
    </>;
}

