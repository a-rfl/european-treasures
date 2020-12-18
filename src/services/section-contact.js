import $ from 'jquery';

export const sectionContact = () => {
  const contact = `
    <div class="contact">
            <h2>Nous contacter</h2>
            <form action="mailto:kejo79@gmail.com" method="post" enctype="text/plain">
                <label for="name">Nom et Prénom</label>
                <input type="text" name="name" id="">

                <label for="email">Email</label>
                <input type="email" name="email" id="">
                <label for="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `;
  $('main').empty();
  $('main').append(contact);
};
