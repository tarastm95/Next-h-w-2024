import React from 'react';
import {Post} from '@/types/IPost';

interface PageProps {
    searchParams: { [key: string]: string };
}

const Page: React.FC<PageProps> = ({ searchParams }) => {
    const post: Post = JSON.parse(searchParams.data);

    return (
        <div>
            <strong>Body:</strong> {post.body}
        </div>
    );
};

export default Page;
