import { elements } from "../base";

export const clearInputs=()=>{
    elements.searchInput.value="";
}
export const clearResult=()=>{
    elements.results.innerHTML="";
}

export const displayResult=data=>{
    var html="";
    if(data.id.name){
         html+=
        
        
            `  
                    <h4 class="text-light text-center">${data.id.name},${data.id.sys.country}</h4>
                    <h4 class="text-light text-center">${Math.round(data.id.main.temp/10)} °C</h4>
                    <h4 class="text-light text-center">${data.id.weather[0].description}</h4>
                    <h4 class="text-light text-center">
                    ${Math.round(data.id.main.temp_min)/10} °C /
                    ${Math.round(data.id.main.temp_max)/10} °C
                    </h4>

            `;
           
    }else {
        html+=
            `<div class="alert alert-secondary" role="alert ">
              Gecerli Sehir Giriniz.
            </div>`
   
    }
    elements.results.insertAdjacentHTML('beforeend',html)
    elements.results.classList.remove('d-none');


}