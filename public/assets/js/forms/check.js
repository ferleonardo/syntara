var showRegisterFormAjaxErrors = function(errors)
{
    for(var errorType in errors)
    {
        for(var i in errors[errorType])
        {
            $('#'+errorType).after('<div class="label label-important error-'+errorType+'">'+errors[errorType][i]+'</div>');
        }
    }
};

var loginIsValidated = function(login)
{
    var loginRules = /^[a-zA-Z0-9_-]{3,16}$/;
    if(!loginRules.test(login))
    {
        return false;
    }
    else
    {
        return true;
    }
};

var emailIsValidated = function(email)
{
    var emailRules = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    if(!emailRules.test(email))
    {
        return false;
    }
    else
    {
        return true;
    }    
};

var passwordIsValidated = function(pass)
{
    var passRules = /^[a-z0-9_-]{6,18}$/;
    if(!passRules.test(pass))
    {
        return false;
    }
    else
    {
        return true;
    }     
};

var doublePassIsValid = function(passOne, passTwo)
{
    if(passOne === passTwo)
    {
        return true;
    }
    else
    {
        return false;
    }
};