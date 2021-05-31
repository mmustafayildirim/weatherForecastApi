import Search from "./models/Search";
import * as searchView from "./views/searhView";
import {elements} from ".//base"

function UpperKelime(string) {
    return String(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
}

const state={};


const searchContoller=async()=>{
    const al= elements.searchInput.value;
    const keywords=UpperKelime(al)
    state.nesne=new Search(keywords);
    searchView.clearInputs();
    searchView.clearResult();
    await state.nesne.getResult();
    searchView.displayResult(state.nesne)
    
  
   
}

elements.searchForm.addEventListener('submit',(e)=>{
    searchContoller();
    e.preventDefault();
    console.log('tıklandı')
})