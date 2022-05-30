import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { Card, Divider } from 'antd';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <Card title="Categories" style={{ margin: '16px 0', width: '100%' }}>
      {categories.map((category) => (
        <p key={category.slug}>
          <Link href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        </p>

      ))}
    </Card>

  )
}

export default Categories
