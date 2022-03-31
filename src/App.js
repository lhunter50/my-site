import logo from './logo.svg';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' mode='horizontal' />
          <Menu mode='horizontal'>
            <Menu.Item key='1'>Nav 1</Menu.Item>
            <Menu.Item key='2'>Nav 2</Menu.Item>
            <Menu.Item key='3'>Nav 3</Menu.Item>
          </Menu>  
        </Header>
        <Breadcrumb style={{padding: '16px 0'}}></Breadcrumb>
        <Content className='site-layout' style={{ padding: '0 50px', marginTop: 64, backGroundColor: 'grey'}}>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 380, backgroundColor: '#707070'}}>
            Content  
          </div>
        </Content>
        <Footer style={{ textAlign:'center'}}>Lachlan Hunter ©2020</Footer>
    </Layout>
  );
}

export default App;
