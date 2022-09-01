var inner_rgb = 
  document.querySelector('#rgb_value')
  
  var Copy_btn = 
  document.querySelector('.material-icons')

var Red = 
document.getElementById('RInput')

var Green =
document.getElementById('GInput')

var Blue = 
document.getElementById('BInput')

    var box = 
  document.getElementById('box--rbg--color')
  
function changeValue()
{
  
  box.style.backgroundColor = 
 'rgb('+Red.value+', '+Green.value+', '+Blue.value+')' 
 
  inner_rgb.value = 'rgb('+Red.value+', '+Green.value+', '+Blue.value+')'
  


  localStorage.setItem('Red', Red.value)
  localStorage.setItem('Green', Green.value)
  localStorage.setItem('Blue', Blue.value)

}

window.onload = () =>{
  var get_red = localStorage.getItem('Red')
  var get_green = localStorage.getItem('Green')
  var get_blue = localStorage.getItem('Blue')
  
  Red.value = get_red
  Green.value = get_green
  Blue.value = get_blue
  
  box.style.backgroundColor = 
 'rgb('+Red.value+', '+Green.value+', '+Blue.value+')' 
 
  inner_rgb.value = 'rgb('+Red.value+', '+Green.value+', '+Blue.value+')'
  
}
  
Copy_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    inner_rgb.select()
    document.execCommand('copy')
    inner_rgb.value = 'copied !'
    setTimeout(function(){
     inner_rgb.value = 'rgb('+Red.value+', '+Green.value+', '+Blue.value+')'
    },700)
  }) 
