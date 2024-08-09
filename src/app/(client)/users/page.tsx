import React from 'react';
import { getAllUsers } from "@/services/api.service";
import Link from "next/link";
import {User} from '@/types/IUser';

const UsersPage: React.FC = async () => {
    let allUsers: User[] = await getAllUsers();

    return (
        <div>
            <ul>
                {
                    allUsers.map(value => (
                        <li key={value.id}>
                            <Link href={{
                                pathname: '/users/' + value.id,
                                query: { data: JSON.stringify(value) }
                            }}>
                                {value.username}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersPage;
