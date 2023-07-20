const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: ["HTML", "CSS", "Responsive design", "JavaScript", "PHP"],
    };
  },
});

app.mount("#app");
