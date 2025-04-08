document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container");

    if (!container) return; // S'assurer que l'élément existe

    container.innerHTML = `
      <!-- Détail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
        <p>"Hardcore" c'est un site e-commerce fictif, qui propose des achats de bombe aérosol de la marque Hardcore, Je l'ai réaliser mon projet durant ma formaion de développeur web full stack</p>
        <p>Ce projet a été réalisé avec HTML, SASS, Javacript, React.js, Node.js et SQL, le projet etait libre, j'ai décidé de creer un site de e-commerce sur des bombes aérosol a peinture.</p>
      </section>
  
      <!-- Technologie -->
      <section id="technologies">
        <h2>Technologies utilisées</h2><br>
        <div class="skills-container">
          <div class="skill"><p>HTML</p></div>
          <div class="skill"><p>SASS</p></div>
          <div class="skill"><p>JavaScript</p></div>
          <div class="skill"><p>React.js</p></div>
          <div class="skill"><p>Node.js</p></div>
          <div class="skill"><p>MySQL</p></div>
        </div>
      </section>
  
      <!-- Fonctionnalités -->
      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Design mobile-first et responsive</li>
          <li>Systeme de panier et de paiement sécurisé</li>
          <li>Dashboard d'aministration</li>
          <li>Formulaire de contact qui fonctionne</li>
        </ul>
      </section>
  
      <!-- Liens -->
      <div class="links">
        <a href="https://github.com/axelwouters/hardcore" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    `;

    // Animation d'apparition progressive
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s";
    });

    let delay = 0;
    sections.forEach(section => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, delay);
        delay += 500; // Délai entre chaque apparition de section
    });
});
