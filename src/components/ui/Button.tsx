// import { HalfCircleSpinner } from "react-epic-spinners";
import {Icon} from "../ui/icon";
interface ButtonData{
    loading: boolean
    variant?: string
    disabled: boolean
    btnClass?: string
    withIcon?: string
    type?: "button" | "submit" | "reset" | undefined
    title?: string
    onClick?: any
    body: any
    size: string
}
export const Button = ({loading, variant, disabled, btnClass, withIcon, body, type, size, onClick, title }: ButtonData) => {
    const classes = () => {
        const comp_size = size ? `button--${size}` : ''
        const comp_variant = variant ? `button--${variant}` : ''
        const comp_disabled = disabled ? 'button--disabled' : ''
        const comp_loading = loading ? 'button--loading' : ''
        const has_Icon = withIcon ? 'button--icon': ''
        const comp_class = btnClass ? btnClass: ''

        return `button ${comp_size} ${comp_variant} ${comp_disabled} ${comp_loading} ${has_Icon} ${comp_class}`
    }

    const buttonIcon = () => {
        if (withIcon) return <Icon name={withIcon}/>
        return ''
    }

   const loaderSize = () => {
        switch (size) {
            case 'default':
                return 15
            case 'large':
                return 20
            case 'small':
                return 15
            case 'medium':
                return 15
            case 'xsmall':
                return 12
            default:
                return 15
        }
    }
    const loaderColor = () => {
        switch (variant) {
            case 'primary':
                return '#ffffff'
            default:
                return 'var(--text-20)'
        }
    }

    return (
        <>
        <button
        className={classes()}
        type={type ?? "button"}
        disabled={disabled || loading}
        onClick={onClick ?? (() =>{})}
        title={title}
        >
            {/* { */}
                {/* loading ? */}
                    {/* <span className="w-100 d-flex justify-content-center align-items-center"> */}
                        {/* <HalfCircleSpinner size={loaderSize()} animationDuration={1000} color={loaderColor()}/></span> */}
                    {/* : withIcon ? <>{buttonIcon()} {body}</>: body */}
            {/* } */}
        </button>
        </>
    )
}
