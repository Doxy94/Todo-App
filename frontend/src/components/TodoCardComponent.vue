<template>
  <Card class="todoCard">
    <template #content>
      <div class="flex flex-clumn gap-2">
        <label for="todoTask">Todo-Task</label> <br />
        <InputText id="todoTask" type="text" aria-describedby="todoTaskHelp" />
        <br />
        <small id="todoTaskHelp" class="form-text text-muted"
          >Please enter your todo task</small
        >
      </div>
      <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="urgency1"
            name="urgency1"
            value="Nicht wichtig"
          />
          <label for="urgency1" class="ml-2">Nicht wichtig</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="urgency2"
            name="urgency2"
            value="urgency2"
          />
          <label for="urgency2" class="ml-2">Mittel</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="urgency3"
            name="urgency3"
            value="urgency3"
          />
          <label for="urgency3" class="ml-2">Wichtig</label>
        </div>
      </div>
      <DatePicker id="datepicker-12h" v-model="datetime12h" showTime hourFormat="12" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import DatePicker from "primevue/datepicker";
import { ref } from "vue";

const urgency = ref<boolen>("");
</script>

<style scoped>
.todoCard {
  width: 50%;
  margin-top: 1rem;
}
</style>
