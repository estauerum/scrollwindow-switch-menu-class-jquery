# scrollwindow-switch-menu-class-jquery


Script to change the class of the menu-item
HTML markup should look like:



                <ul class="menu">
                    <li class="menu__item"><a id="main" href="#" class="menu__link menu__link_active">Home</a></li>
                    <li class="menu__item"><a id="about-link" href="#about" class="menu__link">About me</a></li>
                    <li class="menu__item"><a id="skills-link" href="#skills" class="menu__link">Skills</a></li>
                    <li class="menu__item"><a id="portfolio-link" href="#portfolio" class="menu__link">Portfolio</a></li>
                    <li class="menu__item"><a id="contacts-link" href="#contacts" class="menu__link">Contacts</a></li>
                </ul>
                
                
                
   SASS styles should look like:
   
   
       .menu__link
        color: #828282
        &:hover
            color: #070707
        &_active
            color: #070707
