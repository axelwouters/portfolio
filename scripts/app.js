document.addEventListener("DOMContentLoaded", function (){
    //Gestion des liens de navigation pour activer l'effet actif
    const navLinks = document.querySelectorAll(".mission-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        })
    })
   

    //Mise a jour de l'horodatage dans le footer
    function updateTimestamp(){
        const timestampElement = document.getElementById("current-time")
        const now = new Date();
        const formattedTime = now.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        timestampElement.textContent = formattedTime;
    }

    setInterval(updateTimestamp, 1000);
    updateTimestamp()

    //Effect de surbrillance dynamique sur les liens
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function (){
            this.style.boxShadow = "0px 0px 10px #a1ff42";
        });
        link.addEventListener("mouseout", function (){
            this.style.boxShadow = "none";
        })
    })

    // Animation des barres de progression
    const statBars = document.querySelectorAll(".stat-bar");
    statBars.forEach(bar => {
        bar.style.width = "0%";
    });

    function animateStats() {
        statBars.forEach(bar => {
            const targetWidth = bar.getAttribute("style").match(/width:\s?(\d+)%/)[1];
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.transition = "width 2s ease-in-out";
                bar.style.width = targetWidth + "%";
            }, 500);
        });
    }

    //On lance l'animation des stats quand la section est visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                animateStats();
            }
        }, { threshold: 0.5 })

        document.querySelectorAll(".mission-brief").forEach(section => {
            observer.observe(section);
        })
    })
    

    //On Affiche les compétence

    const skills = [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "SASS", icon: "fab fa-sass" },
        { name: "React", icon: "fab fa-react" },
        { name: "MySQL", icon: "fas fa-database" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Github", icon: "fab fa-github" },
    ];

    const techList = document.querySelector(".tech-list");

    if (techList) {
        skills.forEach(skill => {
            const skillDiv = document.createElement("div");
            skillDiv.className = "tech-item";
            skillDiv.innerHTML = `
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            `;
            techList.appendChild(skillDiv);
        });
    }

})