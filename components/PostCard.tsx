import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Avatar, Card } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
const { Meta } = Card;

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <Link href={`/posts/${post.slug}`}>
      <Card
        hoverable
        cover={<img alt={post.title} src={post.featuredImage.url} />}
        style={{ margin: '16px' }}
      >
        <Meta
          avatar={<Avatar src={post.author.photo.url} alt={post.author.name} />}
          title={post.title}
          description={post.excerpt}
        />
        <div style={{ marginTop: '16px', float: 'right' }}>
          <CalendarOutlined /> {moment(post.createdAt).format('MMM DD, YYYY')}
        </div>
      </Card>
    </Link>
  )
}

export default PostCard;
