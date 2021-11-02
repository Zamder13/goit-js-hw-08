import throttle  from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state"
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),

}
populateTextarea()

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onInputHandle, 500));




function onFormSubmit(evt) {
    evt.preventDefault();


    // console.log("write form");
  

    evt.currentTarget.reset();
   
    localStorage.removeItem(STORAGE_KEY)
    formData = {};
 };





function onInputHandle(evt) {
    const message = evt.target.value;
    formData[evt.target.name] = message;

    // localStorage.setItem(STORAGE_KEY, message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))



    // console.log(message);
    // console.log(formData);

};


function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY);


    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage)
        
        console.log(savedMessage);
        Object.entries(savedMessage).forEach(([name, value]) => {
            formData[name] = value;
            refs.form.elements[name].value = value;
            // console.log(value);
        })
     }

    
    
   
};
 




