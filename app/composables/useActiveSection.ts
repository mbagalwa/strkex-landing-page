import { ref, onMounted, onUnmounted } from "vue";

export const useActiveSection = () => {
  const activeSection = ref<number>(0);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          activeSection.value = Number(id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  onMounted(() => {
    // Observer toutes les sections avec un ID
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return { activeSection };
};
