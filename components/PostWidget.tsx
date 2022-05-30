import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../services';
import { Avatar, Card, Divider } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import Image from 'next/image';
const { Meta } = Card;

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])


  return (
    <Card title={slug ? "Related Posts" : "Recent Posts"} style={{ margin: '16px 0', position: 'fixed' }}
    >
      {relatedPosts.map((post, index) => (
        <>
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div>
              <Image
                alt={post.title}
                height="60px"
                width="60px"
                src={post.featuredImage.url}
                style={{ display: 'inline-block' }}
              />
              <div style={{ display: 'inline-block', marginLeft: '16px' }}>
                <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                <p>{post.title}</p>
              </div>
            </div>
          </Link>
          {index < relatedPosts.length - 1 ? <Divider /> : null}
        </>
      ))}
    </Card >
  )
}

export default PostWidget;

