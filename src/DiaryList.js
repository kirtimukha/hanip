import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList, onDelete}) => {
  return (
    <div className="DiaryList">
      <h2>일기쓰기</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList?.map( (it)=>
          <DiaryItem key={it.id} {...it}  onDelete={onDelete}/>
        )}
      </div>
    </div>

  );
}
//DiaryList 컴포넌트에 전달되는 diaryList에 빈배열을 디폴트로 내려준다
DiaryList.defaultProps = { diaryList: [], }
export default DiaryList;