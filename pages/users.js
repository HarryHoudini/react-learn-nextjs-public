import React from 'react';
import Link from 'next/link'

const Users = () => {
    const [users, setUsers] = React.useState([
        { id: 0, name: 'John',},
        { id: 1, name: 'Alice',},
    ])

    return (
        <div>
           <ul>
              {users.map((user)=>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <a className='link'>{user.name}</a>
                    </Link>
                </li>)}
            </ul>
        </div>
    );
};

export default Users;
