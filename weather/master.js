const searchButton=document.querySelector('.search button')
const input=document.querySelector('.search input')
const weatherImg=document.querySelector('.weather img')
const temperature=document.querySelector('.temp')
const description=document.querySelector('.desc')
const humid=document.querySelector('.humid')
const windSpeed=document.querySelector('.windSpeed')
const info=document.querySelector('.weather-info')
const NotFound=document.querySelector('.notfound')
console.log(NotFound)
const container=document.querySelector('section')
const weatherBox=document.querySelector('.box')
const cityHide=document.querySelector('.city-hide')
searchButton.addEventListener('click',()=>{ 
  repeat()

})

function repeat(){
  
const apiKey='b6e89f3c45339ac5ab527cdf09854ca9' 

  const city=input.value.toUpperCase()
  if(city===' ')
    return;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(response=>response.json()).then(
    json=>{
      if(json.cod == '404'){
        weatherBox.style.height='fit-content'
        NotFound.classList.add('active')
        weatherBox.classList.remove('active')
        info.classList.remove('active')
        
        return;
      }
      weatherBox.style.height='fit-content'
        NotFound.classList.remove('active')
        weatherBox.classList.add('active')
        info.classList.add('active')
    
       
     
        switch(json.weather[0].main){
        case 'Clear':
          weatherImg.src='images/clear.png'
          break;
        case 'Rain':
          weatherImg.src='images/rain.png'
          break;
        case 'Clouds':
          weatherImg.src='images/clouds.png'
          break;
        case 'Mist':
            weatherImg.src='images/mist.png'
            break;  
       case 'Haze':
              weatherImg.src='images/mist.png'
              break; 
           
        case 'Thunderstorm':
              weatherImg.src='images/thunder.png'
              break;  
        case 'Snow':
              weatherImg.src='images/snow.png'
              break;           
        default:
          weatherImg.src='images/sun.png'
      }
      temperature.innerHTML=`${parseInt(json.main.temp)} <span class="text-xs md:text-xl lg:text-xl absolute ml-1">°C</span>`
      description.innerHTML=`${json.weather[0].description} `
      humid.innerHTML=`${json.main.humidity} `
      windSpeed.innerHTML=`${parseInt(json.wind.speed)} `
    }).catch(error => console.error('Error fetching weather data:', error)); 
   
}