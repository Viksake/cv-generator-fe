<template>
  <section class="hero">
    <h1>Zkušenosti</h1>
  </section>
  <div class="forms">
    <div class="workExperience">
      <form @submit.prevent="handleSubmit">
        <div
          v-for="(experience, index) in formExperiencesData"
          :key="index"
          class="experienceForm"
        >
          <h3>Pracovní pozice {{ index + 1 }}</h3>
          <hr />
          <div class="form-grid">
            <div class="form-group column-size">
              <label>Název Pozice</label>
              <input type="text" v-model="experience.jobTitle" />
            </div>

            <div class="form-group column-size">
              <label>Město</label>
              <input type="text" v-model="experience.city" />
            </div>

            <!-- Zaměstnavatel přes celou šířku -->
            <div class="form-group employer">
              <label>Zaměstnavatel</label>
              <input type="text" v-model="experience.employer" />
            </div>

            <!-- Začátek -->
            <div class="date-group">
              <div class="form-group">
                <label>Začátek</label>
                <select v-model="experience.startMonth">
                  <option v-for="month in months" :key="month" :value="month">
                    {{ month }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label>Rok</label>
                <select v-model="experience.startYear">
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Ukončení -->
            <div class="date-group">
              <div class="form-group">
                <label>Ukončení</label>
                <select v-model="experience.endMonth">
                  <option v-for="month in months" :key="month" :value="month">
                    {{ month }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label>Rok</label>
                <select v-model="experience.endYear">
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Popis pracovní náplně</label>
            <textarea v-model="experience.jobDescription"></textarea>
          </div>

          <button
            class="button-style"
            type="button"
            @click="removeExperience(index)"
          >
            Odstranit
          </button>
        </div>
        <button class="button-add" type="button" @click="addExperience">
          + Přidat další pracovní zkušenost
        </button>
      </form>
    </div>

    <div class="education">
      <form @submit.prevent="handleSubmit">
        <div
          v-for="(education, index) in formEducationData"
          :key="index"
          class="educationForm"
        >
          <h3>Vzdělání {{ index + 1 }}</h3>
          <hr />
          <div class="form-grid">
            <div class="form-group column-size">
              <label>Titul</label>
              <input type="text" v-model="education.degree" />
            </div>

            <div class="form-group column-size">
              <label>Město</label>
              <input type="text" v-model="education.city" />
            </div>

            <div class="form-group employer">
              <label>Škola</label>
              <input type="text" v-model="education.school" />
            </div>

            <div class="date-group">
              <div class="form-group">
                <label>Začátek</label>
                <select v-model="education.startMonth">
                  <option v-for="month in months" :key="month" :value="month">
                    {{ month }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label>Rok</label>
                <select v-model="education.startYear">
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>

            <div class="date-group">
              <div class="form-group">
                <label>Ukončení</label>
                <select v-model="education.endMonth">
                  <option v-for="month in months" :key="month" :value="month">
                    {{ month }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label>Rok</label>
                <select v-model="education.endYear">
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <button
            class="button-style button-education"
            type="button"
            @click="removeEducation(index)"
          >
            Odstranit
          </button>
        </div>
        <button class="button-add" type="button" @click="addEducation">
          + Přidat další vzdělání
        </button>
      </form>
    </div>

    <div class="hobby">
      <form @submit.prevent="handleSubmit">
        <div
          v-for="(hobby, index) in formHobby"
          :key="index"
          class="hobby-item"
        >
          <div>
            <h3 class="hobby-header">Zájmy {{ index + 1 }}</h3>
            <hr />
            <input
              type="text"
              v-model="formHobby[index]"
              placeholder="Zadejte zájem"
            />
          </div>
          <button
            class="button-style"
            type="button"
            @click="removeHobby(index)"
          >
            Odstranit
          </button>
        </div>
        <button class="button-add" type="button" @click="addHobby">
          + Přidat další zájem
        </button>
      </form>
    </div>

    <div class="skills">
      <form @submit.prevent="handleSubmit">
        <div
          v-for="(skill, index) in formSkills"
          :key="index"
          class="skill-item"
        >
          <h3>Dovednosti {{ index + 1 }}</h3>
          <hr />
          <div class="skill-row">
            <input
              type="text"
              v-model="skill.name"
              placeholder="Zadejte dovednost"
            />
            <select v-model="skill.level">
              <option value="Začátečník">Začátečník</option>
              <option value="Pokročilý">Pokročilý</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <button
            class="button-style"
            type="button"
            @click="removeSkill(index)"
          >
            Odstranit
          </button>
        </div>
        <button class="button-add" type="button" @click="addSkill">
          + Přidat další dovednost
        </button>
      </form>
    </div>

    <div class="submit-container">
      <button
        class="button-submit"
        type="button"
        @click="
          relocateTemplates();
          saveToLocalStorage();
        "
      >
        Pokračovat
      </button>
      <button class="button-previous" type="button" @click="relocatePrevious">
        Zpátky
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnotherFormPage",
  data() {
    return {
      formExperiencesData: [
        {
          jobTitle: "",
          city: "",
          employer: "",
          startMonth: "Leden",
          startYear: "2025",
          endMonth: "Prosinec",
          endYear: "2025",
          jobDescription: "",
        },
      ],
      formEducationData: [
        {
          degree: "",
          city: "",
          school: "",
          startMonth: "Leden",
          startYear: "2025",
          endMonth: "Prosinec",
          endYear: "2025",
        },
      ],
      formHobby: [""],
      formSkills: [{ name: "", level: "Začátečník" }],
      months: [
        "Leden",
        "Únor",
        "Březen",
        "Duben",
        "Květen",
        "Červen",
        "Červenec",
        "Srpen",
        "Září",
        "Říjen",
        "Listopad",
        "Prosinec",
      ],
      years: Array.from({ length: 76 }, (_, i) => 1950 + i),
    };
  },
  methods: {
    relocatePrevious() {
      this.$router.push("/personal-info");
    },
    relocateTemplates() {
      this.$router.push("/templates");
    },
    addExperience() {
      this.formExperiencesData.push({
        jobTitle: "",
        city: "",
        employer: "",
        startMonth: "Leden",
        startYear: "2025",
        endMonth: "Prosinec",
        endYear: "2025",
        jobDescription: "",
      });
      this.saveToLocalStorage();
    },
    addEducation() {
      this.formEducationData.push({
        degree: "",
        city: "",
        school: "",
        startMonth: "Leden",
        startYear: "2025",
        endMonth: "Prosinec",
        endYear: "2025",
      });
      this.saveToLocalStorage();
    },
    addHobby() {
      this.formHobby.push("");
      this.saveToLocalStorage();
    },
    addSkill() {
      this.formSkills.push({ name: "", level: "Začátečník" });
      this.saveToLocalStorage();
    },
    removeExperience(index) {
      this.formExperiencesData.splice(index, 1);
      this.saveToLocalStorage();
    },
    removeEducation(index) {
      this.formEducationData.splice(index, 1);
      this.saveToLocalStorage();
    },
    removeHobby(index) {
      if (this.formHobby.length > 1) {
        this.formHobby.splice(index, 1);
      } else {
        this.formHobby = [""];
      }
      this.saveToLocalStorage();
    },
    removeSkill(index) {
      this.formSkills.splice(index, 1);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem(
        "formExperiencesData",
        JSON.stringify(this.formExperiencesData)
      );

      localStorage.setItem(
        "formEducationData",
        JSON.stringify(this.formEducationData)
      );

      localStorage.setItem("formHobby", JSON.stringify(this.formHobby));

      localStorage.setItem("formSkills", JSON.stringify(this.formSkills));
    },
    loadFromLocalStorage() {
      const experiences = localStorage.getItem("formExperiencesData");
      this.formExperiencesData = experiences
        ? JSON.parse(experiences)
        : [
            {
              jobTitle: "",
              city: "",
              employer: "",
              startMonth: "Leden",
              startYear: "2025",
              endMonth: "Prosinec",
              endYear: "2025",
              jobDescription: "",
            },
          ];

      const education = localStorage.getItem("formEducationData");
      this.formEducationData = education
        ? JSON.parse(education)
        : [
            {
              degree: "",
              city: "",
              school: "",
              startMonth: "Leden",
              startYear: "2025",
              endMonth: "Prosinec",
              endYear: "2025",
            },
          ];

      const hobbies = localStorage.getItem("formHobby");
      this.formHobby = hobbies ? JSON.parse(hobbies) : [""];

      const skills = localStorage.getItem("formSkills");
      this.formSkills = skills
        ? JSON.parse(skills)
        : [{ name: "", level: "Začátečník" }];
    },
    watch: {
      formExperiencesData: {
        handler() {
          this.saveToLocalStorage();
        },
        deep: true,
      },
      formEducationData: {
        handler() {
          this.saveToLocalStorage();
        },
        deep: true,
      },
      formHobby: {
        handler() {
          this.saveToLocalStorage();
        },
        deep: true,
      },
      formSkills: {
        handler() {
          this.saveToLocalStorage();
        },
        deep: true,
      },
    },
  },
  mounted() {
    this.loadFromLocalStorage();
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
.forms {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f8f9fa;
  padding: 100px;
  padding-bottom: 200px;
}
form {
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  border-radius: 4px;
  background: #f8f9fa;
  color: black;
  height: 100%;
  margin-bottom: 40px;
}

.form-group {
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}

.employer {
  grid-column: span 2;
}

.date-group {
  display: flex;
  gap: 10px;
}

.form-group input {
  width: 100%;
}
.employer {
  width: 97%;
}
.column-size {
  width: 94%;
}

.form-group select {
  width: 100%;
}
.form-group textarea {
  width: 97%;
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.forms h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 15px;
}

hr {
  margin-bottom: 30px;
  border: 1px solid #ccc;
}

label {
  font-weight: bold;
  margin-top: 10px;
}

input,
select,
textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.button-add {
  max-width: 600px;
  width: 100%;
  background-color: #f8f9fa;
  color: black;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.button-style {
  background-color: #f4a261;
  color: black;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}

.button-education {
  margin-top: 20px;
}

.button-style:hover {
  background-color: #e6731b;
}

.experienceForm,
.educationForm,
.hobby-item,
.skill-item {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.submit-container {
  display: flex;
  flex-direction: column; /* Tlačítka budou pod sebou */
  width: 20%;
  margin: 0 auto; /* Aby byl kontejner na střed horizontálně */
  align-items: center; /* Tlačítka na střed horizontálně */
  justify-content: center; /* Tlačítka na střed vertikálně (pokud je kontejner vyšší) */
  margin-top: 100px;
}

.submit-container button {
  margin-top: 0;
  padding: 12px 20px;
  font-size: 16px;
  margin-right: 0;
}

.hobby-item {
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.hobby-item input {
  width: 94%;
}

.button-submit {
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

.button-previous {
  padding: 0;
  color: #c7c7c7;
  font-size: 14px;
  background: #f8f9fa;
  box-shadow: none;
  border: none;
  cursor: pointer;
}
.hobby button {
  margin-top: 20px;
}

.skill-row {
  display: flex;
  gap: 10px;
}

.skill-row input,
.skill-row select {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.skill-item button {
  margin-top: 20px;
}

.experienceForm button {
  margin-top: 20px;
}

select {
  background: #fff;
}
</style>
