// 드롭다운 리스트 생성 - 자바스크립트

(()=>{
  function createDropdownList(list){
    let value;
    let options = '';

    for(let item of list) {
      value = item.value;
      options += `\t<option selected="${item.selected?'selected':''}">${typeof value==='string'?value.toUpperCase():value}</option>\n`;
    }
    
    return `<select>\n${ options }</select>`;
  }

  /* 출력 결과
  <select>
  <option selected="">seoul</option>
  <option selected="">busan</option>
  <option selected="selected">gwangju</option>
  </select>
  */
  console.log(createDropdownList(cityList));
})();