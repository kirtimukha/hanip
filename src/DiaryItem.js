const DiaryItem = ({id, author, content, emotion, created_date}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자: {author} | 감정점수: {emotion}</span>
        <br/>
        <span className="date">작성일(ms): {new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

export default DiaryItem;