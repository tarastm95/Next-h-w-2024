import {User} from '@/types/IUser';
import {Post} from '@/types/IPost';

export const getAllUsers = async (): Promise<User[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response
}

export const getAllPosts = async (): Promise<Post[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    return response
}


