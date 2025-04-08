document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("project-container");
  
    container.innerHTML = `
      <!-- Détail du projet -->
      <section id="details" class="project-section">
        <h1>Présentation du projet</h1><br>
        <p>"Paradis Restaurant" est un site vitrine fictif qui présente un restaurant.</p>
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
        <a href="https://github.com/axelwouters/Paradis_Restaurant" class="btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href=" https://axelwouters.github.io/Paradis_Restaurant/" class="btn-primary" target="_blank" rel="noopener noreferrer">Regarder</a>
      </div>
    `;
});