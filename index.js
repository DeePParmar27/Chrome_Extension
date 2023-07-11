let myLeads=[]
        
let inputBtn=document.getElementById("input-btn")
let tabBtn=document.getElementById("tab-btn")
let inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsLocalstorage=JSON.parse(localStorage.getItem("myLeads"))//checking the storage from application

if(leadsLocalstorage)//if it is not empty/truely
{
    myLeads=leadsLocalstorage
    render(myLeads)
}


tabBtn.addEventListener("click",function()
{
    chrome.tabs.query({active:true , currentWindow:true},function(tabs)
    {
        

  
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

    })



})



function render(leads){
    let listItems=""
    for(let i = 0 ; i < leads.length;i++)
        {
            listItems+= `<li>
                            <a  target='_blank'  href=${leads[i]}>  ${leads[i]}   </a>
                        </li>`
         
        }
    
        ulEl.innerHTML=listItems
    
    }
    
    
    









deleteBtn.addEventListener("dblclick",function()
{
    localStorage.clear();
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click",function()
{
   
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
   console.log(myLeads)
   
    
    console.log(localStorage.getItem("myLeads"))
    render(myLeads)
 

})
