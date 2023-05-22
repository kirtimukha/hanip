import {useState, useRef} from "react";

const DiaryEditor = () => {
/*  const handleTitle = (text) => {
    setAuthor(text)
  }*/
  const handleChangeState = (e) => {
    console.log(e.target.value)
    setState(
      {...state, [e.target.name] : e.target.value}
    )
  }

  const [state, setState] = useState(
    {
      author: "",
      content: "",
      emotion: "",
    }
  );
  const authorInput = useRef();
  const contentInput = useRef();
  const handleSubmit = () => {
    if(state.author.length < 1){
      alert("1글자 이상 입력해주세요.");
      authorInput.current.focus();
      return;
    }
    if(state.content.length < 5){
      alert("내용을 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }
    alert("저장");
  }
  return (

    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input type="text" name="author" value={state.author} ref={authorInput}
           onChange= {handleChangeState}

        />
      </div>
      <div>
        <textarea name="content" id="" cols="30" rows="10" value={state.content}
                  ref={contentInput}
          onChange= {handleChangeState}
        >

        </textarea>
      </div>
      <div>
        오늘의 감정점수:
        <select name="emotion" id="" value={state.emotion} onChange={handleChangeState}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장</button>
      </div>

    </div>
  );
}

export default DiaryEditor;