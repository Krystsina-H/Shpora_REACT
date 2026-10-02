import { Button, Card, Col, Row, Typography } from 'antd';
import { NavLink } from 'react-router';
import { themes } from '../data/themes';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <main>
      <Title>React-шпора</Title>
      <Paragraph>Краткие материалы по основным темам React.</Paragraph>
      <Row gutter={[16, 16]}>
        {themes.map((theme) => (
          <Col xs={24} md={12} lg={8} key={theme.id}>
            <Card title={theme.title}>
              <Paragraph>{theme.shortDescription}</Paragraph>
              <NavLink to={`/themes/${theme.id}`}>
                <Button type="primary">Открыть тему</Button>
              </NavLink>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};
export default HomePage;
