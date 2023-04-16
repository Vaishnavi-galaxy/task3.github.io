class about extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">
            <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 class="w3-text-light-grey">Vaishnavi Sharma</h2>
    <hr style="width:200px" class="w3-opacity">
    <p>To obtain challenging career in IT companies put my all efforts innto the growth of the company and always fullfil my responsibility in the company.
    </p>
    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
    <p class="w3-wide">HTML</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:80%"></div>
    </div>
    <p class="w3-wide">JAVA</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:75%"></div>
    </div>
    <p class="w3-wide">CSS</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:80%"></div>
    </div>

    <p class ="w3-wide">ASP.NET</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:85%"></div>

    <br>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">2+</span><br>
        Projects Done
      </div>
      </div>
    </div>

    <button class="w3-button w3-light-grey w3-padding-large w3-section">
      <a href="resumevai.pdf">
      <i class="fa fa-download"></i> Download Resume</a>
    </button>
        </div>
    }
};


customElements.define('app-about', about);