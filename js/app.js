const loadData= async (srchValue)=>{

   const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${srchValue}`);
   const data= await res.json();
   const phones=data.data;

   displayLoad (phones);//display function call
 
  
}
 const displayLoad= (phones) => {
   const phoneContainer=document.getElementById('phone-container')
   //clear container before adding new one
   //clear previous data
   phoneContainer.textContent='';
   //display show button if there is more than 12
   const showAllButton=document.getElementById('show-all');
   if(phones.length>12){
      showAllButton.classList.remove("hidden");
   }
   else{
      showAllButton.classList.add("hidden");
   }
//array display 1-10
phones= phones.slice(0,12);
phones.forEach(phone => { //forEach for no return
 

   //create a div
   const phoneCard= document.createElement("div");
   phoneCard.classList=`card p-4 bg-emerald-200 shadow-xl`;
   //innerhtml set
   phoneCard.innerHTML=`<figure><img src="${phone.image}" alt="Shoes" /></figure>
   <div class="card-body">
   <h2 class="card-title">${phone.brand}</h2>
   <p>${phone.phone_name}</p>
   <div class="card-actions justify-center">
   <button  onclick="showMore('${phone.slug}');
   show_my_modal.showModal() " class="btn btn-primary">Show more</button>
   </div>
   </div>
   
   
   `;
   phoneContainer.appendChild(phoneCard);//
});
//display none loading spinner
ToggleSpinnerLoad(false);


}
//show more button click
const showMore = async (id) => {
   const res =await fetch(`
   https://openapi.programming-hero.com/api/phone/${id}`);
   const data=await res.json();
   const phone=data.data;
   shoPhoneDisplay(phone);

}
//show more display
const shoPhoneDisplay=(phone)=>{
   console.log(phone);
   const phoneName=document.getElementById("phoneName");
   phoneName.innerHTML=`${phone.name}`;
   const phoneDetails=document.getElementById("details");
   phoneDetails.innerHTML=`${phone?.mainFeatures?.storage
   } ${phone?.mainFeatures?.chipset || "no chipset"
   }  `
   show_my_modal.showModal();
}
//button handle
const handleSrchBtn =() =>{
   ToggleSpinnerLoad(true);
   //input flied
   const srchFiled=document.getElementById("input-filed");
   const srchValue=srchFiled.value;
   // console.log(srchValue);
 
   loadData(srchValue);//main funtion Api call

   
  

}
const ToggleSpinnerLoad =(isLoading)=>{
 //spinner loading
 const SpinnerLoad=document.getElementById('spinner');
if(isLoading){
   SpinnerLoad.classList.remove('hidden');
}
else{
   SpinnerLoad.classList.add ('hidden');
}
}
