import {Button} from "../ui/Button";
import PageImg from "../../assets/images/Login_Illustration.svg";
import {useNavigate} from "react-router-dom";

export const LoadingNotFound = (props: { display: string }) => {

    const navigate = useNavigate();

    return (
        <section className="text-center" style={{paddingTop: '20vh'}}>
            <h1 className="text-5x">{props.display} not found : <code>404</code></h1>
            <img src={PageImg} alt="404"/>
            <p className="mt-20">{props.display} you are trying to access does not exist</p>
            <Button loading={false} variant='primary' disabled={false} body={'Go to homepage'} size='md' onClick={() => navigate('/')}/>
        </section>
    );
};
