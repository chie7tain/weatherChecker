// Add your code here
const formCity = document.querySelector('#form-city');
const result = document.querySelector('#result');
const cityInput = document.querySelector('.location-input');

// cityInput
cityInput.focus();
// making an AJAX call
let apiRequest = new XMLHttpRequest();
// now handling the response from the api we create a
//onreadystatechange function which is called on the four stages
// of the request process with stage four being complete
apiRequest.onreadystatechange = ()=>{
  //checking for complete response using the readyState method
  if(apiRequest.readyState === 4){
    if(apiRequest.status === 404){
      return result.textContent = `Sorry ${cityInput.value} is not on this planet`;
    }else{
      //callin the JSON.parse function on the response to convert the api response from string to JSON which is more manageble
      const response = JSON.parse(apiRequest.response);
      result.textContent = `The weather in ${response.name} is ${response.weather[0].main} which is ${response.weather[0].description} with a wind speed of ${response.wind.speed}`;
      result.style.backgroundColor = 'white';
    }
  }
};

// opening the request using the open method which would be sent
// using when the submit event of the formcity is called
formCity.addEventListener('submit',($event)=>{//the event is captured
// to prevent its default behaviour by calling the preventDefault method on it
$event.preventDefault();
// now we call the open method on the request passing in our
// request verb and url from which the api would be located
const chosenCity = cityInput.value;
apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
apiRequest.send();//calling the send method on the apiRequest
//we send the request to the api
});

let request2 = new XMLHttpRequest();

request2.onreadystatechange = ()=>{
  if(request2.readyState === 4){
    if(request2.status === 404){
      return result.textContent = 'Sorry ${cityInput.value}'
    }else{
      const response = JSON.parse(request2.res)
    }
  }
};
console.log(request2);


