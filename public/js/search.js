//===============searchBar BEGINS===========================//
const cuisineList = document.querySelector('#allRestList')
const forms = document.forms;
const searchBar = document.forms['search-cuisine'].querySelector('input')

searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  // console.log(term);
  
  const cuisines = cuisineList.getElementsByClassName('filter');
  Array.from(cuisines).forEach((allRestDiv)=>{
    const title = allRestDiv.firstElementChild.textContent 
    // console.log(title.toLowerCase().indexOf(term))  
    if(title.toLowerCase().indexOf(term)!= -1){
        allRestDiv.style.display = 'block';
    }else{
        allRestDiv.style.display = 'none';
    }
  }) 
  })

//===============searchBar ENDS===========================//
