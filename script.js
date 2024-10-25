
// Toggle Notifications Sidebar
document.getElementById("bellIcon").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Toggle the sidebar and overlay visibility
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Toggle Settings Sidebar
document.getElementById("menuIcon").addEventListener("click", function() {
    const settingsSidebar = document.getElementById("settingsSidebar");
    const overlay = document.getElementById("overlay");

    // Toggle the settings sidebar and overlay visibility
    settingsSidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close sidebars when clicking on the overlay
document.getElementById("overlay").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const settingsSidebar = document.getElementById("settingsSidebar");
    const overlay = document.getElementById("overlay");

    // Remove active class to hide sidebars and overlay
    sidebar.classList.remove("active");
    settingsSidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Toggle Navbar on smaller screens
document.getElementById("menuIcon").addEventListener("click", function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("active");
});
const dropdownItems = document.querySelectorAll('.dropdown-content li');
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        switchTab(tabName);
        
        // Close the dropdown after selection
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.style.display = 'none';
    });
});

// Toggle dropdown menu when hamburger icon is clicked
document.getElementById("hamburgerIcon").addEventListener("click", function() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});


$(document).ready(function() {
    $('.tab').click(function() {
        // Hide all tab content
        $('.tab-item').hide();

        // Get the target ID from the clicked tab
        var target = $(this).data('target');

        // Show the clicked tab's content
        $(target).show();

        // Add active class to the selected tab
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });

    // Show home tab content by default
    $('#home').show();
});


