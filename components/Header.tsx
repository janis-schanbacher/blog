import React from 'react'
import { Header as HeaderAnt} from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import Link from 'next/link';

const categories = [{name: 'Frontend', slug: 'frontend'}, {name: 'Backend', slug: 'backend'}, {name: 'DevOps', slug: 'devops'}]

const Header = () => {
  return (
    <HeaderAnt style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo" style={{
        "width": "120px",
        "height": "31px",
        "background": "rgba(255, 255, 255, 0.2)",
        "margin": "16px 24px 16px 0",
        "float": "left"
      }}/>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px'}}
      > {/* TODO: float Menu right*/}
          {categories.map(category => (
              <Menu.Item key="1" >
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              </Menu.Item>
          ))}
      </Menu>
    </HeaderAnt>
  )
}

export default Header