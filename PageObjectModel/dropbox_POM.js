class DropBox{

    getUserName(){
        var user_name = '[name="login_email"]'
        return user_name
    }
    getUserPassword(){
        var password =  "//input[@name='login_password']" //using xpath
        return password
    }
    
    clickSignInButton(){
        var clck_btn =  '[class="signin-text"]'
        return clck_btn
    }
    

}

module.exports = DropBox;
