<template>
  <section class="hero">
    <h1>Osobní údaje</h1>
  </section>
  <div id="app">
    <form @submit.prevent="handleSubmit">
      <h4>Osobní údaje</h4>
      <hr class="full-width1" />

      <div class="form-row">
        <!-- Profilová fotka -->
        <div class="form-group photo-upload">
          <label class="upload-box" for="photo-upload">
            <input
              type="file"
              id="photo-upload"
              class="hidden"
              accept="image/*"
              @change="onFileChange"
            />
            <img
              v-if="formPersonalData.photo"
              :src="formPersonalData.photo"
              alt="Profilová fotka"
              class="preview-img"
            />
            <div v-else class="upload-placeholder">
              <span>+ Přidat fotku</span>
            </div>
          </label>
        </div>

        <!-- Křestní jméno, Příjmení a E-mail -->
        <div class="name-email-fields">
          <div class="form-group">
            <label for="firstName">Křestní Jméno:</label>
            <input
              type="text"
              id="firstName"
              v-model="formPersonalData.firstName"
              required
            />
          </div>

          <div class="form-group">
            <label for="lastName">Příjmení:</label>
            <input
              type="text"
              id="lastName"
              v-model="formPersonalData.lastName"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          v-model="formPersonalData.email"
          required
        />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Telefonní číslo:</label>
        <input
          type="text"
          id="phoneNumber"
          v-model="formPersonalData.phoneNumber"
          placeholder="+420 123 456 789"
          required
        />
      </div>

      <div class="form-group">
        <label for="street">Ulice:</label>
        <input
          type="text"
          id="street"
          v-model="formPersonalData.street"
          placeholder="Úzká"
          required
        />
      </div>

      <div class="form-group">
        <label for="streetNumber">Číslo popisné:</label>
        <input
          type="text"
          id="streetNumber"
          v-model="formPersonalData.streetNumber"
          placeholder="123"
          required
        />
      </div>

      <div class="form-group">
        <label for="city">Město:</label>
        <input
          type="text"
          id="city"
          v-model="formPersonalData.city"
          placeholder="Brno"
          required
        />
      </div>

      <div class="form-group">
        <label for="zipCode">PSČ:</label>
        <input
          type="text"
          id="zipCode"
          v-model="formPersonalData.zipCode"
          placeholder="15500"
          required
        />
      </div>

      <div class="form-group">
        <label for="country">Země:</label>
        <input
          type="text"
          id="country"
          v-model="formPersonalData.country"
          placeholder="Česko"
          required
        />
      </div>

      <div class="form-group full-width2">
        <label for="bio">Krátký popis:</label>
        <textarea id="bio" v-model="formPersonalData.bio" required></textarea>
      </div>

      <button
        type="button"
        class="button2"
        @click="
          saveToLocalStorage();
          relocateExperience();
        "
      >
        Pokračovat
      </button>
    </form>
    <button type="button" class="button-previous" @click="relocateHome">
      Zpátky
    </button>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      formPersonalData: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        street: null,
        streetNumber: null,
        city: null,
        country: null,
        zipCode: null,
        bio: null,
        photo: null, // Nový atribut pro fotku
      },
    };
  },
  methods: {
    relocateExperience() {
      this.$router.push("/work-experience");
    },
    relocateHome() {
      this.$router.push("/");
    },
    saveToLocalStorage() {
      localStorage.setItem(
        "formPersonalData",
        JSON.stringify(this.formPersonalData)
      );
    },
    loadFromLocalStorage() {
      const savedData = localStorage.getItem("formPersonalData");
      if (savedData) {
        this.formPersonalData = JSON.parse(savedData);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.formPersonalData.photo = reader.result;
          this.saveToLocalStorage(); // Uloží obrázek do localStorage
        };
      }
    },
  },
  mounted() {
    this.loadFromLocalStorage();
  },
  watch: {
    formPersonalData: {
      handler() {
        this.saveToLocalStorage();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.hero {
  padding: 90px;
  text-align: center;
  background: #14213d;
  color: white;
}
.hero h1 {
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
}
#app {
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  height: 1300px;
  background-color: #f8f9fa;
}

form {
  margin: auto;
  gap: 20px 30px;
  background: white;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
  background: #f8f9fa;
  color: black;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.full-width {
  grid-column: span 2;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #333;
}

h4 {
  grid-column: span 2;
  font-weight: bold;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
}

label {
  align-self: flex-start;
  align-items: left;
  font-weight: bold;
  margin-top: 15px;
}

input {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  width: 96%;
}
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  width: 975px;
}
input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  background: #f4a261;
  color: #1c1c1c;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 40px;
}
.button2:hover {
  background-color: #e6731b;
}

.full-width2 {
  grid-column: span 2;
  width: 100%;
}
.full-width1 {
  grid-column: span 2;
  width: 100%;
  border: 1px solid #ccc;
}

.upload-box:hover {
  border-color: #f4a261;
  background-color: rgba(244, 162, 97, 0.1);
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.hidden {
  display: none;
}

.form-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.photo-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-box {
  margin-top: 55px;
  width: 165px;
  height: 165px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
}

.name-email-fields {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 25px;
}

.button-previous {
  padding: 0;
  color: #c7c7c7;
  font-size: 14px;
  background: #f8f9fa;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 60px;
}
</style>
