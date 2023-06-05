import { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    //console.log("Mount!!");
    return () => {
      //언마운트 시점에 실행됨
      console.log("언마운트 시점에 실행됨!");
    };
  }, []);
  return <div>마운트 되면 나온다.</div>;
};
const Lifecycle = () => {
  /* const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
     console.log("mounted ");
   }, [count, text]);
   useEffect(() => {
     console.log("updated ");
   }, []);
   useEffect(() => {
     console.log(`count is updated: ${count} `);
     if (count > 5) {
       console.log("count is over 5, so initialize to 1");
       setCount(1);
     }
   }, [count]);
   useEffect(() => {
     console.log(`text is updated: "${text}" `);
   }, [text]);*/
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ padding: 20 }}>
      <div>
        <button onClick={toggle}>ON/OFF</button>
      </div>
      {isVisible && <UnMountTest />}
      {/* <div>
        {count}
        <br />
        <button type="text" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>*/}
    </div>
  );
};

export default Lifecycle;
