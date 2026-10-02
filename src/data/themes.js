export const themes = [
  {
    id: 'props',
    title: 'React Props',
    shortDescription: 'Передача данных между компонентами.',
    description:
      'Props позволяют передавать данные от родительского компонента дочернему.',
    code: `function Greeting({ name }) {
  return <h2>Привет, {name}!</h2>
}

function App() {
  return <Greeting name="Кристина" />
}`,
    important: [
      'Props — это объект, содержащий данные, которые передаются в компонент из его родителя.',
      'Props доступны только для чтения, их нельзя изменять.',
      'Дочерний компонент не должен изменять props.',
      'Через props можно передавать значения и функции.',
    ],
    docs: 'https://react.dev/learn/passing-props-to-a-component',
  },
  {
    id: 'state',
    title: 'React State',
    shortDescription: 'Локальное состояние React-компонента.',
    description:
      'State хранит данные, которые могут изменяться во время работы компонента.',
    code: `import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Нажали: {count}
    </button>
  )
}`,
    important: [
      'Не изменяй state напрямую.',
      'Для изменения state используй функцию-сеттер.',
      'setState- асинхронный.',
      'Изменение state вызывает повторный рендер компонента.',
    ],
    docs: 'https://react.dev/learn/state-a-components-memory',
  },

  {
    id: 'use-effect',
    title: 'useEffect',
    shortDescription: 'Выполнение побочных эффектов.',
    description:
      'useEffect позволяет синхронизировать компонент с внешними системами.',
    code: `import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'React-шпора'
  }, [])

  return <h1>Главная страница</h1>
}`,
    important: [
      'Указывай все используемые зависимости эффекта.',
      'Пустой массив запускает эффект после первого рендера.',
      'При необходимости возвращай функцию очистки.',
    ],
    docs: 'https://react.dev/reference/react/useEffect',
  },
  {
    id: 'react-router',
    title: 'React Router ',
    shortDescription: 'Маршрутизации для React-приложений.',
    description:
      'Связывает URL браузера с компонентами: при смене адреса перерисовывается только нужная часть страницы, без полной перезагрузки',
    code: `
    import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

    import { Routes, Route } from 'react-router';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
}`,
    important: [
      'Основные компоненты react-router включают BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams, useLocation, и Outlet',
      'Routes и Route позволяют нам определить маршруты и соответствующие компоненты.',
      'Link и NavLink используются для создания навигационных ссылок.',
      'Хуки useNavigate, useParams и useLocation предоставляют дополнительные возможности для работы с маршрутами и URL.',
      'Компонент Outlet используется для рендеринга вложенных компонентов, связанных с маршрутами.',
      'Компонент PrivateRoute позволяет ограничить доступ к определенным маршрутам только для авторизированных пользователей.',
    ],
    docs: 'https://reactrouter.com/start/declarative/installation',
  },
  {
    id: 'context',
    title: 'context',
    shortDescription:
      'Передача данных через дерево компонентов без явной передачи пропсов от родительских компонентов к дочерним.',
    description:
      'В React пропс-дриллинг (props drilling) - это паттерн, который возникает, когда компоненту нужно передать данные через несколько уровней других компонентов. Он возникает, когда компоненты передают свойства (props) другим компонентам, чтобы они могли использовать эти данные. Одним из вариантов решения данной проблемы является Context',
    code: `
    // Сначала создаём контекст
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
// Предоставление значение контекста внутри компонента-провайдера
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;
// Подписка на контекст
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);
  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}
export default ComponentA;
}`,
    important: ['Не злоупотребляй контекстом'],
    docs: 'https://react.dev/learn/scaling-up-with-reducer-and-context',
  },
];

export function getThemeById(id) {
  return themes.find((item) => item.id === id);
}
