const loadData= async (srchValue)=>{

   const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${srchValue}`);
   const data= await res.json();
   const phones=data.data

   displayLoad (phones);
 
  
}
 const displayLoad= (phones) => {
   const phoneContainer=document.getElementById('phone-container')
   //clear container before adding new one
   phoneContainer.textContent='';

phones.forEach(phone => {
   console.log(phone);
   //create a div
   const phoneCard= document.createElement("div");
   phoneCard.classList=`card p-4 bg-emerald-200 shadow-xl`;
   phoneCard.innerHTML=`<figure><img src="${phone.image}" alt="Shoes" /></figure>
   <div class="card-body">
   <h2 class="card-title">${phone.brand}</h2>
   <p>${phone.slug}</p>
   <div class="card-actions justify-end">
   <button class="btn btn-primary">Buy Now</button>
   </div>
   </div>
   
   
   `;
   phoneContainer.appendChild(phoneCard);
})

}
//button srch
// const btn=document.getElementById("btn-srch").addEventListener("click",function(){
//    console.log("hiiiii");
// })
const handleSrchBtn =() =>{
   const srchFiled=document.getElementById("input-filed");
   const srchValue=srchFiled.value;
   console.log(srchValue);
   loadData(srchValue);
}
