function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tabs div');
    
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tabs div[onclick="showSection('${sectionId}')"]`).classList.add('active');
}