// import {App} from "../../utils/app";
import {Button} from "../ui/Button";

export const LoadingError = (props: { display: string, showLogout?: boolean }) => {

    // const logout = () => {
    //   App.logout();
    // }

    return (
        <section className="text-center" style={{paddingTop: '20vh'}}>
            <h1 className="text-danger"><i className="lni lni-cloud-network"/></h1>
            <h4 className="text-danger">{props.display}</h4>
            <p>Reloading the page most times fixes this.</p>

            { props.showLogout &&
                <>
                    <Button loading={false} variant='danger' disabled={false} body="Logout" size='md' 
                    // onClick={() => logout()}
                    />
                </>
            }
        </section>
    );
};
