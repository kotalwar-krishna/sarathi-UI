//Forms validation
const inputs = document.querySelectorAll("input");
const btnSubmit = document.querySelector(".btn-submit");

const resultName = document.querySelector(".result-name");
const resultMobile = document.querySelector(".result-mobile");
const resultEmail = document.querySelector(".result-email");
const resultChkbox = document.querySelector(".result-check-box");


btnSubmit.addEventListener("click",()=>{
   
   for(i=0;i<inputs.length;i++){
    // Name field Validation    
        if(inputs[i].id=="form-name"){
            (inputs[i].value=="")?errorMessage(resultName): successMessage(resultName);
        }
   // Mobile Number field validation
        if(inputs[i].id=="mobile-no"){
            (inputs[i].value.match("[789][0-9]{9}"))?successMessage(resultMobile):errorMessage(resultMobile);
        }
    //Email field Validation
        if(inputs[i].id=="email-id"){ 
            (inputs[i].value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))?successMessage(resultEmail):errorMessage(resultEmail);
        }
    //Terms Condition tick Validation
        if(inputs[i].id=="terms"){
            (inputs[i].checked)? successMessage(resultChkbox):errorMessage(resultChkbox);
        }
   }
})

const errorMessage = (result) => {
        result.childNodes[1].innerText=`error`;
        result.childNodes[3].innerText= `Please enter the valid input`;
        result.style.color="red";
        inputs[i].style.border="2px solid red";
}

const successMessage = (result) => {
        result.childNodes[1].innerText=`check_circle`;
        result.childNodes[3].innerText= `Looks Good`;
        result.style.color="green";
        inputs[i].style.border="2px solid green"; 
}
