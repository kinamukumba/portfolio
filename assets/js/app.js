const bodyTable = document.querySelector('body.archive');
if(bodyTable){

    document.querySelector('.flex_text i').onclick = ()=>{
        window.location.href = 'index.html'
    }
    const linkProject = document.querySelectorAll('td.link_project');
    linkProject[0].onclick = ()=>{
        window.open("https://www.inotec.it.ao/", "_blank");
    }
    linkProject[1].onclick = ()=>{
        window.open("https://www.fiji.org.ao/", "_blank");
    }
    linkProject[2].onclick = ()=>{
        window.open("https://bolsas-justas.vercel.app/", "_blank");
    }
    linkProject[3].onclick = ()=>{
        window.open("https://e-commerce-tau-indol.vercel.app/", "_blank");
    }
}