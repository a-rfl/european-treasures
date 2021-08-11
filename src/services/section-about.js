import $ from 'jquery';

// Fonction qui crée la section 'A Propos'
export const sectionAbout = () => {
  const about = `<section class="about">
        <h2>a propos</h2>
        <div class="about_img">
            <img src="img-pages/img-about.jpg" alt="Cala Gonone, Italie" loading="lazy"/>
        </div>
        <div class="about_text">
            <h4 class="about_text_subtitle">Qui sommes-nous ?</h4>
            <p>
                Le site <span class="about_text--italic">European Treasures</span> a été créé par <span class="about_text--bold">3</span> femmes&nbsp;: <span class="about_text--color-bold">Samiha</span>, <span class="about_text--color-bold">Katarina</span> et <span class="about_text--color-bold">Alice</span>.<br/>
                Toutes trois en reconversion professionnelle, nous nous sommes rencontrées à la formation de <span class="about_text--italic">front-end developper</span> à <span class="about_text--bold">Interface3 Bruxelles</span>.
                <br/>
                C'est lors de notre <span class="about_text--color-bold">premier projet</span> de groupe que nous nous sommes rendues compte de nos <span class="about_text--bold">intérêts communs</span> pour la nature et le voyage. <span class="about_text--italic about_text--color-bold">European Treasures</span> est alors né.
            </p>
            <h4 class="about_text_subtitle">Quel est notre objectif ?</h4>
            <p>
                Nous savons que voyager et assouvir <span class="about_text--color-bold">notre soif de découverte</span>, d'aventure n'est <span class="about_text--bold">pas toujours possible</span> que ce soit par manque de temps, de moyen ou, plus récemment, à cause d'une crise sanitaire qui n'en finit pas...
                <br/>
                <span class="about_text--color-bold">Quel dommage</span>, n'est-ce pas ?
                <br/>
                C'est pour cela que nous avons créé <span class="about_text--italic about_text--bold">European Treasures</span>, pour que vous puissiez <span class="about_text--color-bold">nourrir votre curiosité</span>, <span class="about_text--color-bold">explorer</span> et <span class="about_text--color-bold">découvrir</span> l'<span class="about_text--italic">Europe</span> sous un nouveau jour et ce <span class="about_text--bold">où que vous soyez </span>!
            </p>
        </div>
    </section>`;
  // Vide le html de la balise main
  $('main').empty();
  // Ajoute le contenu de 'about' à main
  $('main').append(about);
};
