import React from 'react';
import { Post as GeneratedPost } from 'contentlayer/generated';

import PostHeader from './PostHeader';
import PostCTA from './PostCTA';
import MDXRenderer from '~/core/ui/MDXRenderer/MDXRenderer';

const Post: React.FCC<{
  post: GeneratedPost;
  content: string;
}> = ({ post, content }) => {
  return (
    <div className={'mx-auto max-w-2xl my-8'}>
      <PostHeader post={post} />

      <article className={'mx-auto flex justify-center'}>
        <MDXRenderer code={content} />
      </article>

      <PostCTA />
    </div>
  );
};

export default Post;
