import './styles.css';

const ActionButtons = ({ onChange, onSubmit, value }) => {
  return (
    <div className='action-buttons--container'>
      {/* 
        1. 인풋창에 입력
        2. 버튼 클릭시 
        3. useState setText 값 변경
      */}
      <input
        value={value}
        placeholder='내용을 입력해주세요.'
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
      <button
        className='action-buttons--button__add'
        onClick={() => {
          onSubmit();
        }}
      >
        글쓰기
      </button>
    </div>
  );
};

export default ActionButtons;
