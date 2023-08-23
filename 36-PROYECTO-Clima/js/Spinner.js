

// clase Spinner

export class Spinner {
    static activateSpinner(time){
        const spinner = document.querySelector("#spinner");
        spinner.classList.remove("hidden");

        setTimeout(()=>{
            spinner.classList.add("hidden");
        },time);
    }
}