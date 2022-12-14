import { showErrorMessage } from "./ui/errorMessage.js.js";
export class EmployeeForm {
        #formElement;
        #imputElement;
        #dateimputElement;
        #salaryImputElement;
        #dateErororElement;
        #salaryErrorElement;
        #minSalary;
        #maxSalary;
        #minYear;
        #maxYear;
        constructor(params) {
            this.#formElement= document.getElementById(params.idForm);
            this.inputElements =document.querySelectorAll(`#${params.idForm} [name]`);
            this.#dateimputElement = document.getElementById(params.idDateImput);
            this.#salaryErrorElement = document.getElementById(params.idSalaryImput);
            this.#dateErororElement = document.getElementById(params.idDeteError);
            this.#salaryErrorElement = document.getElementById(params.idSalaruError);
            this.#maxSalary = params.minSalary;
            this.#minSalary = params.maxSalary;
            this.#minYear = params.minYear;
            this.#maxYear =getMaxYear();
            onChange();
        }
         addSabmitHandler(processEmployeeFun) {
            this.#formElement.addEventListener("submit", (event) => {
                    event.preventDefault();
                    console.log("submitted");
                    const employee = Array.from(inputElements).reduce(
                        (res, cur) => {
                            res[cur.name] = cur.value;
                            return res;
                        }, {}
                    )
                    console.log(employee);
                    processEmployeeFun(employee);
                 })
         }  
         
         onChange() {
            this.#dateErororElement.addEventListener("change", (event) => {
                validateBirthdate(event.target);
            })
            this.#salaryImputElement.addEventListener("change", (event) => {
                validateSalary(event.target);
            })

}

   if (event.target.name == "salary") {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") {
        validateBirthdate(event.target);
    }
}

  validateSalary(element) {
    const value = +element.value;
    if (value < this.minSalary || value > this.maxSalary) {
        const message = value < this.minSalary ? `salary must be ${minSalary} or greater`
            : `salary must be ${maxSalary} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function getMaxYear() {
    return new Date().getFullYear();
}

