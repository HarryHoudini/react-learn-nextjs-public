import React from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import A from "../components/A/A";

const Users = ({ users }) => {
    return (
        <MainContainer keywords="users" title="users list">
                <h1>Список пользователей</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <A href={`/users/${user.id}`} text={user.name} />
                        </li>
                    ))}
                </ul>
        </MainContainer>
    );
};

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            users,
        },
    };
}

export default Users;
