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
        }else if(difficulties==1){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=numbers[Math.floor(Math.random()*len)];
                i+=2;
            }
            let newPass = this.pass = this.pass.substring(0,len);
            document.getElementById("pass").value=newPass;
        }
        
        
    }
    
}
let randPass = new PasswordGenerator();
let randPass2 = new PasswordGenerator();
let randPass3 = new PasswordGenerator();


// console.log(randPass.generatePassword(7,3));
