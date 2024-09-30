document.addEventListener('DOMContentLoaded',()=>{
    if (localStorage.getItem("loggedIn") === null || localStorage.getItem("loggedIn")==false) 
    {
        window.location.href = "/login.html"
    }
    else
    {
        console.log()
        if(localStorage.getItem('type') == 'sales')
        {
            document.querySelector("#repair-link").remove();
            document.querySelector("#report-link").remove();
            document.querySelector("#lookup-link").remove();
            document.querySelector("#equipment-link").remove();

            if((window.location.href.indexOf("Repair") != -1) && (window.location.href.indexOf("Request")==-1))
            {
                window.location.href = "/denied.html"
            }
            if(window.location.href.indexOf("Report") != -1)
            {
                window.location.href = "/denied.html"
            }
            if(window.location.href.indexOf("Lookup") != -1)
            {
                window.location.href = "/denied.html"
            }
        }
        else if(localStorage.getItem('type') == 'tech')
        {
            document.querySelector("#customer-link").remove();
            document.querySelector("#report-link").remove();
            document.querySelector("#lookup-link").remove();

            if(window.location.href.indexOf("Customer") != -1)
            {
                window.location.href = "/denied.html"
            }
            if(window.location.href.indexOf("Report") != -1)
            {
                window.location.href = "/denied.html"
            }
            if(window.location.href.indexOf("Lookup") != -1)
            {
                window.location.href = "/denied.html"
            }
      
        }
    }
    document.querySelector('.logout-btn').addEventListener('click', ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("type");
        localStorage.removeItem("loggedIn", false);
        window.location.href = "/index.html";
        return false;
    })
    document.querySelector(".head-profile-text").innerHTML = `Hello ${localStorage.getItem("name")}`
})