import React from 'react';
import { getAllPosts } from "@/services/api.service";
import Link from "next/link";
import {Post} from '@/types/IPost';

const PostsPage: React.FC = async () => {
    let posts: Post[] = await getAllPosts();
    console.log(posts);

    return (
        <div>
            <ul>
                {
                    posts.map(value => (
                        <li key={value.id}>
                            <Link href={{
                                pathname: '/posts/' + value.id,
                                query: { data: JSON.stringify(value) }
                            }}>
                                {value.id} - <strong>Title:</strong> {value.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostsPage;
