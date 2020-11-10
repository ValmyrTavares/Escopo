export default class MostraContainer{
constructor(trigger, container){
    this.trigger = document.querySelector(trigger)
    this.container = document.querySelector(container)

}

addEvent(){
    this.trigger.addEventListener('click',()=>{
        this.showContainer()
    } )
}

showContainer(){
   this.container.classList.toggle('active')
}


init(){
    this.addEvent()   
}

}
