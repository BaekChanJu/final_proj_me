

   
   
   
  
   function checkOnlyOne(element) {
	  //name 값 keywords와 맞추기
     const checkboxes = document.getElementsByName("keywords");
     
      //체크박스를 중복없이 하나만 클릭하게 하기위한 js                                 
    checkboxes.forEach((cb) => {
     cb.checked = false;
        })
     element.checked = true;
        
     }//end of checkOnlyOne



    //키워드 벨류 값으로 검색을 위한 js   
    function sub(element){
    
   	 const a = document.getElementsByName("keywords");
       
   }//end of sub


