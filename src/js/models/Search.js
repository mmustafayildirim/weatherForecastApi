import {api_key,base_url} from "../config";

export default class searchContoller{
    constructor (keyword){
        this.keyword=keyword
    }
    async getResult(keyword){
        const response=await fetch(`${base_url}weather?q=${this.keyword}&appid=${api_key}`)
        this.id=await response.json();
       
    }
}

