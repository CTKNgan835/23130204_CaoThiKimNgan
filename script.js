const searchIcon = document.getElementById('search-icon');
const searchBarContainer = document.getElementById('search-bar-container');
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');

// Dữ liệu gợi ý tìm kiếm
const topics = [
  "Climate Change",
  "Biodiversity",
  "Renewable Energy",
  "Carbon Neutrality",
  "Sustainable Living",
  "Wildlife Conservation",
  "Oceans",
  "Food Security",
];

// Hiển thị thanh tìm kiếm khi nhấn vào biểu tượng
searchIcon.addEventListener('click', () => {
  searchBarContainer.classList.toggle('hidden');
  searchInput.focus();
});

// Hiển thị gợi ý khi nhập từ khóa
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const matches = topics.filter(topic => topic.toLowerCase().includes(query));

  if (matches.length > 0) {
    searchSuggestions.classList.remove('hidden');
    searchSuggestions.innerHTML = matches
      .map(match => `<li>${match}</li>`)
      .join('');
  } else {
    searchSuggestions.classList.add('hidden');
    searchSuggestions.innerHTML = '';
  }
});

// Khi nhấn vào gợi ý
searchSuggestions.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    searchInput.value = e.target.textContent;
    searchSuggestions.classList.add('hidden');
  }
});

// Ẩn thanh tìm kiếm khi click bên ngoài
document.addEventListener('click', (e) => {
  if (!searchBarContainer.contains(e.target) && e.target !== searchIcon) {
    searchSuggestions.classList.add('hidden');
    searchBarContainer.classList.add('hidden');
  }
});


/* menu */ 

// Selecting necessary elements
const exploreDropdown = document.getElementById('explore');
const exploreMenu = document.getElementById('explore-menu');
const exploreItems = document.querySelectorAll('.explore-item');

// Toggle the visibility of the dropdown menu
exploreDropdown.addEventListener('click', () => {
  exploreMenu.classList.toggle('hidden');
});

// Add click event to each explore item
exploreItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Getting the target class from data attribute
    const targetId = item.getAttribute('data-target');

    // Navigate to the corresponding section (using an anchor link or class)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Smooth scroll to the element (optional)
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }

    // Optionally hide the explore menu after selection
    exploreMenu.classList.add('hidden');
  });
});

// Hide the explore dropdown when clicking outside
document.addEventListener('click', (e) => {
if (!exploreDropdown.contains(e.target)) {
  exploreMenu.classList.add('hidden');
}
});

// Ẩn dropdown khi nhấp ra ngoài
document.addEventListener('click', (e) => {
    if (!exploreDropdown.contains(e.target)) {
        exploreMenu.classList.add('hidden');
    }
});

/* home */

    document.addEventListener('DOMContentLoaded', function() {
        // Lấy phần tử home
        const homeLink = document.getElementById('home');
        const logo = document.querySelector('.logo h1');

        // Hàm cuộn đến phần featured-article
        function scrollToFeaturedArticle() {
            const featuredArticle = document.getElementById('featured-article');
            if (featuredArticle) {
                featuredArticle.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Thêm sự kiện click cho Home link
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Chặn hành động mặc định
            scrollToFeaturedArticle();
        });

        // Thêm sự kiện click cho logo
        logo.addEventListener('click', function(event) {
            scrollToFeaturedArticle();
        });
    });

    /* animation */


    var modal = document.getElementById("loginModal");
    var donateBtn = document.getElementById("donateBtn");
    var closeModal = document.getElementById("closeModal");
    donateBtn.onclick = function() {
        modal.style.display = "block";
    }
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById("loginBtn").onclick = function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username && password) {
            alert("Thank you, " + username + "! You want to donate to CTKNEnvironment.");
            modal.style.display = "none";
        } else {
            alert("Please enter your username and password.");
        }
    }