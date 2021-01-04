// eslint-disable-next-line import/prefer-default-export
export const header = `


<div class="container">
        <div class="logo">
            <a href="#"><img src="logo/logo.png" alt="logo"></a>
        </div>
    <div class="navbar">
    
    <div class="icon-bar" onclick="Show()">
        <i></i>
        <i></i>
        <i></i>
    </div>
    
    <ul id="nav-lists">
        <li class="close"><span onclick="Hide()">×</span></li>
        <li><a href="#" onclick="Hide()">Accueil</a></li>
        <li><a href="#" onclick="Hide()">Destinations</a></li>
       
        <li ><a href="#"></a></li>
        <li ><a href="#"></a></li>
       
        <li><a href="#" onclick="Hide()">à propos</a></li>

        <li><a href="#" onclick="Hide()">Contact </a></li>
    </ul>
    
    </div>
    </div>
  
<script >
        const navList = document.getElementById('nav-lists');
function Show() {
    console.log('toto');
  navList.classList.add('_Menus-show');
}

function Hide() {
    console.log('titi');
  navList.classList.remove('_Menus-show');
}
</script>



`;
