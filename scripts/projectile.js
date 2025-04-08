document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container");
  
    if (!container) return;

    container.innerHTML = `
      <!-- Détail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
        <p>"Les îles Paradisiaque" est un site vitrine fictif qui présente un restaurant.</p>
        <p>Ce projet a été réalisé avec HTML et CSS.</p>
      </section>
  
      <!-- Technologie -->
      <section id="technologies">
        <h2>Technologies utilisées</h2><br>
        <div class="skills-container">
          <div class="skill"><p>HTML</p></div>
          <div class="skill"><p>CSS</p></div>
        </div>
      </section>
  
      <!-- Fonctionnalités -->
      <section id="features">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Design responsive</li>
          <li>Présentation du menu</li>
          <li>Formulaire de réservation</li>
          <li>Carte interactive</li>
        </ul>
      </section>
  
      <!-- Liens -->
      <div class="links">
        <a href="https://github.com/axelwouters/Les_-les_paradisiaques" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href=" https://axelwouters.github.io/Les_-les_paradisiaques/" class="btn-primary" target="_blank" rel="noopener noreferrer">Regarder</a>
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

