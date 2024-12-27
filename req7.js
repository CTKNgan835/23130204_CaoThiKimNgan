document.querySelectorAll('.goal-section').forEach(function(section) {
    section.addEventListener('click', function() {
        
        document.querySelectorAll('.goal-section').forEach(function(sec) {
            sec.classList.remove('active');
        });
        
        this.classList.add('active');
    });
});