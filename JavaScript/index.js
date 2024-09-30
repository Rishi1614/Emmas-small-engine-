document.addEventListener('DOMContentLoaded',()=>{
    
    if (localStorage.getItem("loggedIn") === null) 
    {
        window.location.href = "/login.html"
    }
    else
    {
        if(localStorage.getItem('type') == 'sales')
        {
            document.querySelector("#equipment-link").remove();
            document.querySelector("#repair-link").remove();
            document.querySelector("#lookup-link").remove();
            document.querySelector("#report-link").remove();
        }
        else if(localStorage.getItem('type') == 'tech')
        {
            document.querySelector("#customer-link").remove();
            document.querySelector("#lookup-link").remove();
            document.querySelector("#report-link").remove();
        }
    }
    document.querySelector('.logout-btn').addEventListener('click', ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("type");
        localStorage.removeItem("loggedIn", false);
        window.location.href = "/index.html"
        return false;
    })
    document.querySelector(".dashboard-profile-text").innerHTML = `Hello ${localStorage.getItem("name")}`
 })