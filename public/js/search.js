//===============searchBar BEGINS===========================//
const cuisineList = document.querySelector('#allRestList')
const forms = document.forms;
const searchBar = document.forms['search-cuisine'].querySelector('input')

searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  console.log(term);
  
  const cuisines = cuisineList.getElementsByTagName('li');
  Array.from(cuisines).forEach((randomInput)=>{
    const title = randomInput.firstElementChild.textContent 
    if(title.toLowerCase().includes(term)){
        randomInput.style.display = 'block';
    }else{
        randomInput.style.display = 'none';
    }
  }) 
  })

//===============searchBar ENDS===========================//

