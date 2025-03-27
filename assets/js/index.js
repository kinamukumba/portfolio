const navItem = document.querySelectorAll('.flex__item');
navItem.forEach(item=>{
    item.classList.remove('active');
})

navItem[0].onclick = ()=>{
    navItem.forEach(item=>{
        item.classList.remove('active');
    })
    navItem[0].classList.add('active')
    window.location.href = '#about-me'
    window.scrollTo({ top: 0, behavior: "smooth" });
}
navItem[1].onclick = ()=>{
    navItem.forEach(item=>{
        item.classList.remove('active');
    })
    navItem[1].classList.add('active')
    window.location.href = '#my-experience'
}
navItem[2].onclick = ()=>{
    navItem.forEach(item=>{
        item.classList.remove('active');
    })
    navItem[2].classList.add('active')
    window.location.href = '#my-projects'
}

const uxViews = document.querySelectorAll('.views-project');
uxViews[0].onclick = ()=>{
    window.location.href = 'Profile.pdf'
}

uxViews[1].onclick = ()=>{
    window.location.href = 'archive.html'
}


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("#about-me, #my-experience, #my-projects");
    const navItems = document.querySelectorAll(".flex__item");

    const observer = new IntersectionObserver(
        (entries) => {
            let currentSection = "";
            
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentSection = entry.target.id;
                    console.log(currentSection);
                    
                }
            });
            
            navItems.forEach((item) => item.classList.remove("active"));
            
            if (currentSection) {
                let activeNavItem = Array.from(navItems).find((item) => {
                    return item.textContent.toLowerCase().includes(
                        currentSection.replace("my-", "").replace("about-me", "sobre")
                    );
                });
                console.log(activeNavItem);
                
                if (activeNavItem) {
                    activeNavItem.classList.add("active");
                }
            }
        },
        { threshold: 0.6 } // Ajuste para considerar 60% da seção visível
    );

    sections.forEach((section) => observer.observe(section));
});


