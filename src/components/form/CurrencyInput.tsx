import {useField} from "formik";
// import CurrencyFormat from 'react-currency-format';
import {useState} from "react";

export const CurrencyInput = ({label, setFieldValue, ...props}: any) => {
    const [field, meta] = useField(props);

    const [finalAmount, setFinalAmount] = useState<number>(0);

    const calcFinalAmount = (amount: number) => {
        setFinalAmount(amount * 0.95);
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor={props.id || props.name}>{label}</label>
                {/* <CurrencyFormat className="form-control"
                                allowNegative={false}
                                thousandSeparator={true}
                    // isNumericString={true}
                                prefix="₦"
                                {...field} {...props}
                                onValueChange={(values => calcFinalAmount(values.floatValue))}
                /> */}

                {
                    +finalAmount > 0 &&
                    <div id="textHelp" className="text-success mt-5 fs-12">You'll receive ₦
                    {/* {<CurrencyFormat value={finalAmount} displayType={'text'} thousandSeparator={true} />}  */}
                    per vote</div>
                }

                {meta.touched && meta.error && <>
                    <div className="text-danger small mt-2">{meta.error}</div>
                </>}
            </div>
        </>
    );
};
