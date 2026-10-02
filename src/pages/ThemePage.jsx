import { getThemeById } from '../data/themes';
import { useParams, Navigate, NavLink } from 'react-router';
import { Alert, Button, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ThemePage = () => {
  const { themeId } = useParams();
  const theme = getThemeById(themeId);
  if (!theme) {
    return <Navigate to="/not-found" replace />;
  }
  return (
    <main>
      <NavLink to="/">На главную</NavLink>
      <Title>{theme.title}</Title>
      <Paragraph>{theme.description}</Paragraph>
      <Card title="Пример кода">
        <pre>
          <code>{theme.code}</code>
        </pre>
      </Card>
      <Alert
        type="warning"
        showIcon
        title="Важные моменты"
        description={
          <ul>
            {theme.important.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
      />
      <Button type="primary" href={theme.docs} target="_blank">
        Официальная документация
      </Button>
    </main>
  );
};
export default ThemePage;
