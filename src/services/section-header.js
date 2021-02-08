// eslint-disable-next-line import/prefer-default-export
export const header = `


<div class="container">
        <div  id="small-logo"class="logo">
            <a href="#"><img src="logo/logo-small-white.png" alt="logo"></a>
        </div>
    <div class="navbar">
    
    <div class="icon-bar" onclick="Show()">
        <i></i>
        <i></i>
        <i></i>
    </div>
   
    <ul id="nav-lists">
        <li class="logo-menu-mob"></li>
        <li class="close"><span onclick="Hide()">×</span></li>
        <li ><div class="overlay home-mob"><a href="#" onclick="Hide()" id="home">Accueil</a></div></li>
        <li><div class="overlay destinations-mob"><a  href="#" onclick="Hide()" id="destinations">Destinations</a></div></li>
        <li class="flex-grow"></li>
        <li ><div class="overlay about-mob"><a  href="#" onclick="Hide()" id="about">à propos</a></div></li>
        <li ><div class="overlay contact-mob"><a  href="#" onclick="Hide()" id="contact">Contact </a></div></li>
    </ul>
    
    </div>
    </div>
  
<script >
        const navList = document.getElementById('nav-lists');
function Show() {
   
  navList.classList.add('_Menus-show');
      const h2 = document.querySelector('h2');
  h2.style.opacity = 0;
  h2.style.width = 0;
  const menuFilter = document.querySelector('.destinations-header');
  menuFilter.style.opacity = 0;
  menuFilter.style.width = 0;
}
function Hide() {  
  navList.classList.remove('_Menus-show');
}
</script>

`;
