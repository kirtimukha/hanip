import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

const dummyList = [
  {
    id : 1,
    author: "stella1",
    content: "1 hello, dear. Long time no see.",
    emotion: 5,
    created_date: new Date().getTime() // getTime : date 객체를 밀리세컨즈로 돌려줌
  },
  {
    id : 2,
    author: "stella2",
    content: "2 hello, dear. Long time no see.",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id :3 ,
    author: "stella3",
    content: "3 hello, dear. Long time no see.",
    emotion: 1,
    created_date: new Date().getTime()
  },

]
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, content, emotion, created_date, id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList = {data} />
    </div>
  );
}

export default App;
