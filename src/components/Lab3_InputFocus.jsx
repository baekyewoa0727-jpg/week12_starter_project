import { useRef, useState } from 'react';

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  const [message, setMessage] = useState('');
  // TODO 1: input DOM을 참조할 inputRef 생성 (초기값 null)
  const inputRef = useRef(null);

  const focusInput = () => {
    // TODO 2: ref.current를 이용해 input에 focus() 호출
    inputRef.current.focus();
  };

  const clearInput = () => {
    // TODO 3: input의 값을 지우고 다시 Focus
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const checkInput = () => {
    if (inputRef.current.value.trim() === '') {
      setMessage('Enter your name.');
    } else {
      setMessage('등록되었습니다.');
    }
  };

  return (
    <div>
      <p className="hint">TODO를 완성하면 Focus / Clear 버튼이 동작합니다.</p>
      <label htmlFor="student-name" className="hint">Name</label>
      <input id="student-name" className="field" placeholder="Enter your name" ref={inputRef}
        /* TODO 4: ref={inputRef} 속성 연결 */ />


      <div className="controls">
        <button onClick={focusInput}>Focus</button>
        <button className="secondary" onClick={clearInput}>Clear</button>
        <button onClick={checkInput}>Submit</button>
      </div>
      <p className="hint">{message}</p>
    </div>
  );
}
