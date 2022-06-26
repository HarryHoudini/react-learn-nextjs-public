import { useRouter } from "next/router";
import style from "./User.module.scss";
import MainContainer from "../../components/MainContainer/MainContainer";

const User = ({ user }) => {
    const { query } = useRouter();

    return (
        <MainContainer keywords="user" title={user.username}>
            <div className={style.user}>
                <h1>User {query.id}</h1>
                <div>UserName {user.name}</div>
            </div>
        </MainContainer>
    );
};

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {
            user,
        }, // will be passed to the page component as props
    };
}

export default User;
