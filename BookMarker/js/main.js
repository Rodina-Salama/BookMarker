 var siteName=document.getElementById('siteName');
 var siteURL=document.getElementById('siteURL');
var websitlist=[];
var uregex=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
var nregex=/^[a-z]{3,9}$/;

if(localStorage.getItem('websiteData')!= null){
websitlist= JSON.parse(localStorage.getItem('websiteData'));
displayData(websitlist);

}



function submitlink(){

    var website={
        names:siteName.value,
        url:siteURL.value
    }
   
        if(uregex.test(siteURL.value)&&  nregex.test(siteName.value)){

            websitlist.push(website);

            x=JSON.stringify(websitlist)
            localStorage.setItem('websiteData',x)
            displayData();

            console.log('hi from if');
        
               }
            else{
                document.getElementById('btn2').click();
            }

           
clearform();
console.log(websitlist);
console.log(website);
}



 function clearform(){

    siteName.value='';
    siteURL.value='';
    siteURL.classList.remove('is-invalid');
    siteName.classList.remove('is-invalid');
    siteURL.classList.remove('is-valid');
    siteName.classList.remove('is-valid');
}


function displayData(){
    var container='';
    for (var i = 0; i< websitlist.length; i++) {
     container+=`   <tr class="text-center">
     <td scope="row">${i+1}</td>
     <td>${websitlist[i].names}</td>
     <td><a href="${websitlist[i].url}" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
     <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
 </tr>`
        
    }
    document.getElementById('tbody').innerHTML=container;
    console.log(container);
}


function deleteItem(index){
websitlist.splice(index,1);
localStorage.setItem('websiteData',JSON.stringify(websitlist));
displayData(websitlist);
}


function validateName(){
    // var nregex=/^[a-z]{3,8}$/
  var y=  nregex.test(siteName.value);
  console.log(y);
 
//   if(y==true){
//     siteName.classList.replace('is-invalid','is-valid')
//   }
 

if(y==false){
    siteName.classList.add('is-invalid')
  }
  else{
     siteName.classList.remove('is-invalid')
    siteName.classList.add('is-valid')

  }



}
siteName.addEventListener('input',function(){
    validateName()
})



function validateUrl(){
    // var uregex=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  var z=  uregex.test(siteURL.value);
  console.log(z);


if(z==false){
    siteURL.classList.add('is-invalid')
  }
  else{
    siteURL.classList.remove('is-invalid')
    siteURL.classList.add('is-valid')

  }



}
siteURL.addEventListener('input',function(){
    validateUrl()
})



































