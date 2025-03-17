<template>
  <section class="hero">
    <h1>Výběr šablon</h1>
  </section>
 <div class="body">
  <div class="templates-container">
    <div 
      v-for="template in templates" 
      :key="template.id" 
      class="template-card" 
      @click="openPreview(template)"
    >
      <h3>{{ template.name }}</h3>
      <hr>
      <img :src="template.image" alt="Šablona" class="preview-image">

    </div>

    <div v-if="selectedTemplate" class="modal">
      <div class="modal-content">
        <h2>{{ selectedTemplate.name }}</h2>
        <img :src="selectedTemplate.image" alt="Šablona" class="preview-image">

        <div class="modal-buttons">
        <button @click.prevent="selectTemplate(selectedTemplate);handleSubmit()">Use this Template</button>
        <button @click="selectedTemplate = null" class="close-btn">X</button>
      </div>
      </div>
    </div>
  </div>
  <button class="button-previous" type="button" @click="relocatePrevious">Zpátky</button>
</div> 

</template>


<script>
import axios from 'axios';
import template1 from '../assets/template1.png';
import template2 from '../assets/template2.jpg';
import template3 from '../assets/template3.jpg';
export default {
  name: "TemplatesPage",
  data() {
    return {
      templates: [
        { id: 1, name: "Šablona 1", image: template1},
        { id: 2, name: "Šablona 2", image: template2},
        { id: 3, name: "Šablona 3", image: template3}
        
      ],
      selectedTemplate: null
    };
  },
  methods: {
    async handleSubmit() {
  try {
    // ✅ Načtení správných dat podle localStorage
    const personalData = JSON.parse(localStorage.getItem('formPersonalData')) || {};
    const educationData = JSON.parse(localStorage.getItem('formEducationData')) || []; // Pole []
    const workExperienceData = JSON.parse(localStorage.getItem('formExperiencesData')) || []; // Pole []
    const skillsData = JSON.parse(localStorage.getItem('formSkills')) || []; // Pole []
    const hobbiesData = JSON.parse(localStorage.getItem('formHobby')) || []; // Pole []
    const selectedTemplate = localStorage.getItem('selectedTemplate')
      ? parseInt(localStorage.getItem('selectedTemplate'), 10)
      : null;


    // ✅ Oprava struktury dat (přímé pole místo objektu)
    const allData = {
      ...personalData,
      experiences: Array.isArray(workExperienceData) ? workExperienceData : [],  
      education: Array.isArray(educationData) ? educationData : [],        
      hobbies: Array.isArray(hobbiesData) ? hobbiesData : [],            
      skills: Array.isArray(skillsData) ? skillsData : [],              
      selectedTemplate
    };


    // ✅ Debugging - ověř výstup v konzoli
    console.log('🔍 Data odesílána na backend:', JSON.stringify(allData, null, 2));

    // ✅ Odeslání na backend (MongoDB)
    const response = await axios.post('http://localhost:5000/api/users', allData, {
      headers: { 'Content-Type': 'application/json' }
    });


    console.log('✅ Odpověď ze serveru:', response.data);
    alert('Formulář úspěšně odeslán!');

  } catch (error) {
    console.error('❌ Chyba při odesílání formuláře:', error);
    alert('Při odesílání došlo k chybě');

    if (error.response) {
      console.log('🔴 Chyba v odpovědi:', error.response.data);
      console.log('🔴 Status kód:', error.response.status);
    } else if (error.request) {
      console.log('🔴 Chyba při odesílání požadavku:', error.request);
    } else {
      console.log('🔴 Chyba při nastavení požadavku:', error.message);
    }
  }
},

openPreview(template) {
  this.selectedTemplate = template;
},

selectTemplate(template) {
  console.log("Vybraná šablona:", template.id);
  localStorage.setItem('selectedTemplate', template.id);
  this.selectedTemplate = template;
  this.$router.push(`/builder/${template.id}`);
},


    relocatePrevious() {
      this.$router.push("/work-experience")
    },  
  }
};
</script>

<style scoped>
.body {
  background-color: #F8F9FA;
  width: 100vw;
  height: 80vh;
}
.hero {
    padding: 90px;
    text-align: center;
    background: #14213D;
    color: white;
}
.hero h1 {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
}
.templates-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 30px;
  background: #F8F9FA;
}

.template-card {
  width: 350px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s;
  background: #ffffff;
}
.template-card h3 {
 margin-bottom: 10px;
}

.template-card hr {
 margin-bottom: 10px;
}


.template-card img {
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.template-card:hover {
  transform: scale(1.05);
}

.template-image {
  width: 100%;
  border-radius: 5px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background: #F8F9FA;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}


.modal-content h2{
  margin-bottom: 10px;
}

.modal-content img{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 10px; /* mezera mezi tlačítky */
  margin-top: 15px;
}

.modal-buttons button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.modal-buttons button:first-child {
  background: #14213D;
  color: white;
}

.close-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.preview-image {
  max-width: 90%;
  height: auto;
  border-radius: 10px;
}

.button-previous {
    margin-top: 100px;
    padding: 0;
    color: #c7c7c7;
    font-size: 14px;
    background: #F8F9FA;
    box-shadow: none;
    border: none;
    cursor: pointer;
}

.template-card:hover {
  border: solid 1px #e6731b;
}

.template-card h3:hover {
  color: #e6731b;
}
</style>