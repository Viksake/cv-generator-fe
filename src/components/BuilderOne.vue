<template>
  <div class="body">
  <div class="container">
    <div class="left-side">
      <div class="profile-text">
          <div class="img-box">
              
          </div>
          <h2>Viktor Přichystal</h2>
      </div>

      <div class="contact-info">
          <h3 class="title">Kontakt</h3>
          <ul>
              <li>
                  <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                  <span class="text">+420 456 444 704</span>
              </li>
              <li>
                  <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <span class="text">váš.email@gmail.com</span>
              </li>
              <li>
                  <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                  <span class="text">Brno, Česká republika</span>
              </li>
          </ul>
      </div>

            <div class="contact-info education">
              <h3 class="title">Vzdělání</h3>
              <ul>
                  <li>
                    <h5>2010 - 2013</h5>
                    <h4>Titul</h4>
                    <h4>Název školy</h4>
                  </li>
                  <li>
                    <h5>2000 - 2009</h5>
                    <h4>Titul</h4>
                    <h4>Název školy</h4>
                  </li>
                  <li>
                    <h5>1994 - 1999</h5>
                    <h4>Titul</h4>
                    <h4>Název školy</h4>
                  </li>
              </ul>
          </div> 

      <div class="contact-info">
          <h3 class="title">Zájmy</h3>
                  <ul>
                      <li>Zpěv</li>
                      <li>Čtení</li>
                      <li>Vaření</li>
                  </ul>
          </div>

    </div>
    <div class="right-side">
      <div class="about">
          <h2 class="title2">Profil</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit nec tellus et placerat. In sit amet lobortis risus. Nulla condimentum ornare augue non aliquet. Praesent ac ullamcorper leo. In ut lacinia ligula. Ut dapibus vel nibh ac fringilla. Sed sollicitudin sed ante non aliquam. Pellentesque sit amet hendrerit eros. Aenean pretium sollicitudin congue. Maecenas finibus facilisis molestie. Ut mattis magna in felis faucibus lacinia.<br><br> Sed ultricies molestie tristique. Integer iaculis, nunc id lobortis vulputate, lorem nunc molestie mi, at blandit felis risus quis odio. Nulla nisi nulla, rutrum ac erat eu, efficitur suscipit ipsum. Proin enim est, pulvinar non diam sit amet, mollis sollicitudin mauris.</p>
      </div>
      
      <div class="about">
          <h2 class="title2">Pracovní zkušenosti</h2> 
          <div class="box">
          <div class="year_company">
              <h5>2019 - Present</h5>
              <h5>Název společnosti</h5>
          </div>
          <div class="text">
              <h4>Senior UX Designer</h4>
              <p>Aliquam luctus augue sit amet laoreet tristique. Nam sit amet mi congue, dapibus leo sit amet, tempor magna. Maecenas eu cursus neque. Curabitur ultricies porta consectetur. Praesent id finibus diam. Praesent at placerat mauris. Cras ultrices facilisis libero.</p>
          </div>

          <div class="box">
              <div class="year_company">
                  <h5>2016 - 2018</h5>
                  <h5>Název společnosti</h5>
          </div>
              <div class="text">
                  <h4>UX/UI Designer</h4>
                  <p>Aliquam luctus augue sit amet laoreet tristique. Nam sit amet mi congue, dapibus leo sit amet, tempor magna. Maecenas eu cursus neque. Curabitur ultricies porta consectetur. Praesent id finibus diam. Praesent at placerat mauris. Cras ultrices facilisis libero.</p>
              </div>
          </div>

              <div class="box">
                  <div class="year_company">
                      <h5>2013 - 2016</h5>
                      <h5>Název společnosti</h5>
                  </div>
                  <div class="text">
                      <h4>Junior UX Designer</h4>
                      <p>Aliquam luctus augue sit amet laoreet tristique. Nam sit amet mi congue, dapibus leo sit amet, tempor magna. Maecenas eu cursus neque. Curabitur ultricies porta consectetur. Praesent id finibus diam. Praesent at placerat mauris. Cras ultrices facilisis libero.</p>
                  </div>
              </div>
          </div>

          <div class="about skills">
              <h2 class="title2">Odborné dovednosti</h2>
              <div class="box">
                  <h4>HTML</h4>
                  <div class="percent">
                      <div style="width: 33%;"></div>
                  </div>
              </div>
              <div class="box">
                  <h4>CSS</h4>
                  <div class="percent">
                      <div style="width: 66%;"></div>
                  </div>
              </div>
              <div class="box">
                  <h4>Javascript</h4>
                  <div class="percent">
                      <div style="width: 100%;"></div>
                  </div>
              </div>
              <div class="box">
                  <h4>Photoshop</h4>
                  <div class="percent">
                      <div style="width: 66%;"></div>
                  </div>
              </div>
              <div class="box">
                  <h4>Skicer</h4>
                  <div class="percent">
                      <div style="width: 33%;"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</template>



<script>
export default {
name: "BuilderOne",
};
</script>



<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  .body {
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
  }

  .profile-text h2, 
  .contact-info, 
  .contact-info ul li, 
  .contact-info.education h5, 
  .contact-info.education h4, 
  .about, 
  .about .box .year_company h5, 
  .about .box .text h4, 
  .skills .box h4, 
  .skills .box .percent {
  text-align: left;
}

.profile-text h2 {
  margin-top: 20px;
  text-align: left; /* Zarovnání jména doleva */
}

.about p {
  text-align: left;
}

.contact-info ul li {
  text-align: left;
}
  .container {
    position: relative;
    width: 100%;
    max-width: 1000px;
    min-height: 1000px;
    background: #fff;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
  }
  .container .left-side {
    position: relative;
    background: #003147;
    padding: 40px;
  }
  .profile-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .profile-text .img-box {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
  .profile-text .img-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile-text h2 {
    color: #fff;
    font-size: 1.5em; 
    margin-top: 20px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    line-height: 1.4em;
  }
  .profile-text h2 span {
    font-size: 0.8em;
    font-weight: 300;

  }
  .container .right-side {
    position: relative;
    background: #fff;
    padding: 40px;
  }
  .contact-info {
    padding-top: 40px;
  }
  .title  {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .contact-info ul{
    position: relative;

  }
  .contact-info ul li {
    list-style: none;
    position: relative;
    margin: 10px 0;
    cursor: pointer;
  }
  .contact-info ul li span {
    color: #fff;
  }
  .contact-info ul li .icon{
    display: inline-block;
    width: 30px;
    font-size: 18px;
    color: #03A9f4;
  }

  .contact-info.education li{
    margin-bottom: 15px;
  }
  .contact-info.education h5 {
    color: #03a9f4;
    font-weight: 500;
  }
  .contact-info.education h4:nth-child(2) {
    color: #fff;
    font-weight: 500;
  }
  .contact-info.education h4 {
    color: #fff;
    font-weight: 300;
  }
  .about {
    margin-bottom: 50px;
  }
  .about:last-child{
    margin-bottom: 0;
  }
  .title2 {
    color:#003147;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  p {
    color: #333
  }
  .about .box{
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  } 
  .about .box .year_company{
    min-width: 150px;
  }
  .about .box .year_company h5{
    text-transform: uppercase;
    color: #848c90;
    font-weight: 600;
  }
  .about .box .text h4{
    text-transform: uppercase;
    color: #2a7da2;
    font-size: 16px;
  }
  .skills .box {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 150px 1fr;
    justify-content: center;
    align-items: center;
  }
  .skills .box h4 {
    text-transform: uppercase;
    color: #848c90;
    font-weight: 500;
  }
  .skills .box .percent {
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #848c90;
  }
  .skills .box .percent div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #03a9f4;
  }
  .contact-info ul li {
    color: #fff;
    font-weight: 500;
  }
</style>