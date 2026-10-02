import './App.css';
import { Layout, Menu, Typography } from 'antd';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { themes } from './data/themes.js';
import HomePage from './pages/HomePage.jsx';
import ThemePage from './pages/ThemePage.jsx';
import NotFound from './pages/NotFound.jsx';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      key: '/',
      label: 'Главная',
    },
    ...themes.map((item) => ({
      key: `/themes/${item.id}`,
      label: item.title,
    })),
  ];
  return (
    <Layout className="app-layout">
      <Header className="header">
        <Title level={3}>React-шпора</Title>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(key)}
        />
      </Header>
      <Content className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/themes/:themeId" element={<ThemePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer>React-шпора</Footer>
    </Layout>
  );
};

export default App;
