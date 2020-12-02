import $ from 'jquery';

// Fonction qui crée la section 'A Propos'
// Puis l'ajoute à main
export const sectionAbout = () => {
  const about = `<section class="about">
        <h1>a propos</h1>
        <div class="about_img">
            <img src="img-about.jpg" alt="Cala Gonone, Italie"/>
        </div>
        <div class="about_text">
            <h2 class="about_text_subtitle">Qui sommes-nous ?</h2>
            <p>
                Le site <span class="about_text--italic">European Treasures</span> a été créée par <span class="about_text--bold">3</span> femmes&nbsp;: <span class="about_text--color-bold">Samiha</span>, <span class="about_text--color-bold">Katarina</span> et <span class="about_text--color-bold">Alice</span>.<br/>
                Toutes trois en reconversion professionnelle, nous nous sommes tournées vers une formation de front-end developper à <span class="about_text--bold">Interface3 Bruxelles</span>, où nous nous sommes rencontrées.
                <br/>
                Et c'est de nos intérêts communs pour la nature et le voyage que le projet <span class="about_text--italic">European Treasures</span> est né.
            </p>
            <h2 class="about_text_subtitle">Quel est notre objectif ?</h2>
            <p>
                Nous savons que voyager et assouvir <span class="about_text--color-bold">notre soif de découverte</span>, d'aventure n'est <span class="about_text--bold">pas toujours possible</span> que ce soit par manque de temps, de moyen ou, plus récemment, à cause d'une crise sanitaire qui n'en finit pas...
                <br/>
                <span class="about_text--color-bold">Quel dommage, n'est-ce pas ?</span>
                <br/>
                C'est pour cela que nous avons créé <span class="about_text--italic">European Treasures</span>, pour que vous puissiez nourrir votre curiosité et <span class="about_text--bold">explorer</span> des endroits naturels à couper le souffle à travers l'<span class="about_text--color-bold">Europe</span> tout en restant <span class="about_text--bold">dans votre lit</span> ou canapé.
            </p>
        </div>
    </section>`;
  $('main').append(about);
};
