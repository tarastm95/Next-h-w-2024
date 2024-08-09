import React from 'react';
import {User} from '@/types/IUser';

interface UserPageProps {
    searchParams: { [key: string]: string };
}

const UserPage: React.FC<UserPageProps> = ({ searchParams }) => {
    const user: User = JSON.parse(searchParams.data);
    console.log(user);

    return (
        <div>
            <strong>ID:</strong> {user.id} <br/>
            <strong>Name:</strong> {user.name} <br/>
            <strong>Email:</strong> {user.email} <br/>
        </div>
    );
};

export default UserPage;
