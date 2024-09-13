document.addEventListener('DOMContentLoaded' , ()=>{
    const toggleButton = document.getElementById("toggleSkillsButton") as HTMLButtonElement;
    const skillsSection = document.getElementById("Skills") as HTMLElement;
      toggleButton.addEventListener('click',()=>{
        if (skillsSection.style.display === 'none'){
          skillsSection.style.display = 'block';
        } else {
          skillsSection.style.display = 'none';
        }
      })
     }
  )

  document.getElementById('profileImage')?.addEventListener('change', (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    const preview = document.getElementById('preview') as HTMLImageElement;
    if (file) preview.src = URL.createObjectURL(file);
});