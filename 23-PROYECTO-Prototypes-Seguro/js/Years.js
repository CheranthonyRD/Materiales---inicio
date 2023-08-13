
function Years(min = 2010, max = new Date().getFullYear()){
    this.max = max;
    this.min = min;
    const year = document.querySelector("#year");

    Years.prototype.generateYears = function(){
        for(i = max; i > min; i--){
            const option = document.createElement("OPTION");
            option.textContent = i;
            option.value = i;
            option.classList.add("option");
            year.appendChild(option);
        }
    }
}



