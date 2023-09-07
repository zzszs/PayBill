import React from 'react'
import {Layout, Menu} from 'antd'

const DefaultLayout: React.FC <{children: React.ReactNode}>= ({children}) => {
  const { Header, Content, Footer } = Layout

  return (
    <Layout className='layout'>
      <Header>
        <Menu 
          theme='dark' 
          mode='horizontal'
          items={[{key: 1, label: 'Home'}, {key: 2, label: 'Groups'}]} 
        />
      </Header>
      <Content>
        {children}
      </Content>
      <Footer style={{marginTop: 'auto'}}>
        Footer
      </Footer>
    </Layout>
  )
}

export default DefaultLayout