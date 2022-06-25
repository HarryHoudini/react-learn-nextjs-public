import { useRouter } from "next/router";
import style from "User.module.scss";

const User = () => {
    const { query } = useRouter();

    return (
        <div className={style.user}>
            <h1>Users {query.id}</h1>
        </div>
    );
};

export default User;
