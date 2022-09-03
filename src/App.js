import './App.css';

function App() {

  let curDate = new Date();
  let currentDate = `${curDate.getDate()}/${curDate.getMonth()+1}/${curDate.getFullYear()}` ;
  let curTime = curDate.getHours() + ':' + curDate.getMinutes() + ':' + curDate.getSeconds();
  curDate = curDate.getHours();
  let greeting= "";
  const cssStyle = {};

  if(curDate >= 1 && curDate < 12)
  {
      greeting="Good Morning";
      cssStyle.color = "green";
  }else if(curDate >= 12 && curDate < 16){
      greeting="Good AfterNoon";
      cssStyle.color = "red";
  }else if(curDate >= 16 && curDate < 20){
      greeting="Good Evening";
      cssStyle.color = "yellow";
  }else{
      greeting="Good Night";
      cssStyle.color = "navy";
  }
  return (
    <div>
      <h1>Hello Sir! <span style = {cssStyle}> {greeting} </span></h1>
      <h2>Date : {currentDate}</h2>
      <h2>Time : {curTime}</h2>
    </div>
  );
}

export default App;
