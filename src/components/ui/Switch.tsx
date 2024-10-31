// import { HalfCircleSpinner } from "react-epic-spinners";

export const Switch = ({loading, isToggled, ...props}: any) => {

    return (
        <>
            <label className={`switch ${loading ? 'isLoading': ''}`} htmlFor="switch">

                {
                    !loading && <input id="switch" name="switch" className="switch_input" type="checkbox" defaultChecked={isToggled} {...props} />
                }
                <span className="slider">
                </span>
                {/* {
                    loading &&
                    <HalfCircleSpinner size={14} animationDuration={1000} color="#ccc"/>
                } */}
            </label>
        </>
    )
}