// Create a js program that capable of generating a password which contains atleast one lowercase, one uppercase and one special characters. Create a password class to achieve the same

class PasswordGenerator{
    constructor(){
        console.log("welcome to password generator");
        this.pass = "";
    }
    generatePassword(len,difficulties){
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let specialChar = "!@@#$%^&*";

        if(len<3){
            document.getElementById("alert").innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error!</strong> Please choose a valid input
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        } 
        
    }
    
}
let randPass = new PasswordGenerator();
let randPass2 = new PasswordGenerator();
let randPass3 = new PasswordGenerator();


// console.log(randPass.generatePassword(7,3));
