import { useState } from 'react';
import ActionButtons from '../components/ActionButtons';

const MainPage = () => {
  const [text, setText] = useState('');
  const [notices, setNotices] = useState([]);

  const onSubmit = () => {
    setNotices([...notices, { title: text }]);
    setText('');
  };

  return (
    <div>
      <ActionButtons
        onChange={setText}
        value={text}
        onSubmit={onSubmit}
      ></ActionButtons>
      {notices.length > 0 &&
        notices.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })}
    </div>
  );
};

export default MainPage;
