<template>
  <div>
    <TabMenu :model="items" />
    <div v-if="activeItem === 'Home'">Home</div>
    <div v-if="activeItem === 'Todo'" class="content">Todo</div>
    <div v-if="activeItem === 'Finance'" class="content">Finance</div>
    <div v-if="activeItem === 'Calendar'" class="content">Calendar</div>
    <div v-if="activeItem === 'Settings'" class="content">Settings</div>
  </div>
</template>

<script setup>
import TabMenu from "primevue/tabmenu";
import { ref, onMounted } from "vue";

const items = ref([
  { label: "Home" },
  { label: "Todo" },
  { label: "Finance" },
  { label: "Calendar" },
  { label: "Settings" },
]);
const activeItem = ref("Home");

const setActiveItem = (label) => {
  activeItem.value = label;
};

onMounted(() => {
  items.value.forEach((item) => {
    item.command = () => {
      setActiveItem(item.label);
    };
  });
});
</script>

<style scoped>
/* Custom Styles for TabMenu */
.p-tabmenu {
  background-color: #f5f5f5;
  padding: 1rem;
}

.p-tabmenu-nav {
  display: flex;
  justify-content: space-around;
}

.p-tabmenuitem {
  margin: 0 1rem;
}

.p-tabmenuitem-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.p-tabmenuitem-link:hover {
  background-color: #e0e0e0;
}

.p-tabmenuitem-active .p-tabmenuitem-link {
  font-weight: bold;
  border-bottom: 2px solid #007ad9;
}

.p-tabmenuitem-disabled .p-tabmenuitem-link {
  color: #999;
  cursor: not-allowed;
}

.p-tabmenuitem-icon {
  margin-right: 0.5rem;
}
</style>
