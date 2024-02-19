import SectionHeader from '../SectionHeader';
import PostList from './PostList';

const getPosts = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/posts`);
  const res = await fetch(`/api/posts`);

  return res.json();
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <section
      className='section'
      id='blog'
    >
      <div className='container mx-auto'>
        <SectionHeader
          pretitle={'Our Blog'}
          title={'Latest News'}
        />
        {/* posts list */}
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
