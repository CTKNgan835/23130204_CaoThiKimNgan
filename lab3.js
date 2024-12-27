function showTabs(subject) {
    document.querySelector('.subjects-container').style.display = 'none';
    const containerToShow = document.getElementById(subject + '-tabs');
    containerToShow.style.display = 'block';

    const title = document.getElementById('subject-title');
    title.innerHTML = subject.charAt(0).toUpperCase() + subject.slice(1);

    document.getElementById('back-button').style.display = 'block';
}

function showTabContent(subject, tab) {
    document.querySelectorAll(`#${subject}-tabs .tab-content`).forEach(content => {
        content.style.display = 'none';
    });

    const contentToShow = document.getElementById(`${subject}-${tab}`);
    contentToShow.style.display = 'block';
}

function goBack() {
    document.querySelector('.subjects-container').style.display = 'flex';
    document.querySelectorAll('.tab-container').forEach(container => {
        container.style.display = 'none';
    });

    document.getElementById('back-button').style.display = 'none';
    document.getElementById('subject-title').innerHTML = '';
}

function searchSubjects() {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.subject').forEach(subject => {
        const subjectText = subject.innerText.toLowerCase();
        subject.style.display = subjectText.includes(query) ? 'block' : 'none';
    });
}