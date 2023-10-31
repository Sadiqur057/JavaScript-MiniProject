class PasswordGenerator{
    constructor(){
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
        else if(difficulties==2){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=numbers[Math.floor(Math.random()*len)];
                this.pass+=specialChar[Math.floor(Math.random()*len)];
                i+=3;
            }
            let newPass = this.pass = this.pass.substring(0,len);
            document.getElementById("pass").value=newPass;
        }else if(difficulties==3){
            let i =0;
            while(i<len){
                this.pass+=alphabets[Math.floor(Math.random()*len)];
                this.pass+=alphabets[Math.floor(Math.random()*len)].toUpperCase();
                this.pass+=numbers[Math.floor(Math.random()*len)];
                this.pass+=specialChar[Math.floor(Math.random()*len)];
                i+=3;
            }
            let newPass = this.pass = this.pass.substring(0,len);
            document.getElementById("pass").value=newPass;
        }       
    }
    copyPassword(){
        const inputField = document.getElementById("pass");
        inputField.select();
        document.execCommand("copy");
        // inputField.setSelectionRange(0, 0);
        document.getElementById("alert").innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Password copied to clipboard 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
    }
}
let randPass = new PasswordGenerator();
let randPass2 = new PasswordGenerator();
let randPass3 = new PasswordGenerator();
let randPass4 = new PasswordGenerator();

  

