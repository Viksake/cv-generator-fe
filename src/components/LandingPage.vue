<template>
<header>
    <nav>
       <ul>
            <li><a href="#">Vytvořit životopis</a></li>
            <li><a href="#">Sekce</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>   
    </nav> 
</header>

    <section class="hero">
        <h1>Generátor životopisů</h1>
        <p>Vytvořte si profesionální životopis během pár minut!</p>
        <button class="btn" @click="relocatePersonal">Vytvořit životopis</button>
    </section>
    
    <section class="features">
    <div class="feature">
        <Icon icon="stash:pencil-writing-light" width="75" />
        <div class="feature-content">
            <h2>Jednoduchost bez kompromisů</h2>
            <p>Vytvoření životopisu nebylo nikdy snazší. Stačí vyplnit několik základních údajů, vybrat si šablonu a během pár minut máte hotový životopis připravený k použití.</p>
        </div>
    </div>

    <div class="feature">
        <Icon icon="bi:people-fill" width="75" />
        <div class="feature-content">
            <h2>Profesionální vzhled na pár kliknutí</h2>
            <p>Moderní a přehledné šablony.</p>
        </div>
    </div>

    <div class="feature">
        <Icon icon="solar:bill-list-outline" width="75" />
        <div class="feature-content">
            <h2>Okamžitý export do PDF</h2>
            <p>Uložte si svůj životopis ve vysoké kvalitě.</p>
        </div>
    </div>
</section>
    
    <section class="templates">
        <h2>Vytvořte si životopis, který vynikne</h2>
        <p> Zvyšte své šance na získání vysněné práce díky profesionálně navrženým šablonám a dokonale sladěným barevným kombinacím.</p>
        <div class="template-list">
            <div class="template">
                <img :src="template1" alt="Šablona 1">   
            </div>
            <div class="template">
            <img :src="template2" alt="Šablona 2">
        </div>
            <div class="template">
                <img :src="template3" alt="Šablona 3">
            </div>
        </div>
    </section>
    
    <footer>
        <p>&copy; 2025 Generátor Životopisů</p>
    </footer>
</template>

<script> 
import { Icon } from '@iconify/vue';
import template1 from '@/assets/template1.png';
import template2 from '@/assets/template2.jpg';
import template3 from '@/assets/template3.jpg';
export default {
    components: {
        Icon
    },
    data() {
    return { template1, template2, template3 };
},
    methods: {
    relocatePersonal() {
    this.$router.push("/personal-info")
},   

}
}
</script>

<style scoped>
header {
    background: #0A192F;
    padding: 20px;
}
nav { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}
nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}
nav ul li {
    margin-left: 40px;
}
nav a {
    text-decoration: none;
    color: #E0E0E0;
    font-weight: bold;
    transition: 0.3s;
}
nav a:hover {
    color: #F4A261;
}
nav .btn {
    background: #F4A261;
    color: #1C1C1C;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;
}
nav .btn:hover {
    background: #E76F51;
    color: white;
}

.hero {
    padding: 50px;
    text-align: center;
    background: #14213D;
    color: white;
}
.hero h1 {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    padding-bottom: 10px;
}
.hero p {
    opacity: 0.85;
    font-size: 18px;
    padding-bottom: 15px;
}
.hero button {
    background: #F4A261;
    color: #1C1C1C;
    padding: 12px 25px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
}
.hero button:hover {
    background: #E76F51;
    color: white;
}

.features {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    background: #F8F9FA;
    align-items: center;
}

.feature {
    display: flex;
    align-items: center;
    background: white;
    padding: 20px;
    width: 60%;
    height: 140px;
    border-radius: 12px;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
    gap: 20px;
    margin-top: 30px;
    transition: 0.3s;
}
.feature:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
}

.feature-content {
    display: flex;
    flex-direction: column;
}

.feature h2 {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: #14213D;
}

.feature p {
    font-size: 16px;
    color: #555;
    margin: 0;
}
.templates {
    padding: 50px;
    text-align: center;
    background: #264653;
    color: white;
}
.templates h2 {
    font-size: 32px;
    color: #E9C46A;
}
.templates p {
    opacity: 0.85;
    font-size: 18px;
}
.template-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
.template {
    width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: 0.3s;
    overflow: hidden;
    max-width: 100%; /* Obrázek se přizpůsobí šířce kontejneru */
    max-height: 100%; /* Obrázek se přizpůsobí výšce kontejneru */
    position: relative; /* Přidáno pro absolutní pozicování obrázku */
    gap: 20px
}
.template img {
    max-width: 100%; /* Obrázek se přizpůsobí šířce kontejneru */
    max-height: 100%; /* Obrázek se přizpůsobí výšce kontejneru */
    object-fit: cover; /* Zachová poměr stran */
}
.template:hover {
    transform: scale(1.05);
}

footer {
    background: #0A192F;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    font-size: 14px;
}

</style>