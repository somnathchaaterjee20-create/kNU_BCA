// ============================================
// UNIVERSITY PORTAL - MAIN JAVASCRIPT
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    setupEventListeners();
    loadUserData();
    initializeSidebar();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

// ============================================
// SIDEBAR FUNCTIONS
// ============================================

function initializeSidebar() {
    const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
    
    sidebarItems.forEach(item => {
        const link = item.querySelector('.sidebar-menu-link');
        if (link) {
            link.addEventListener('click', function(e) {
                // Check if it has submenu
                if (item.querySelector('.sidebar-submenu')) {
                    e.preventDefault();
                    toggleSubmenu(item);
                }
            });
        }
    });
}

function toggleSubmenu(item) {
    item.classList.toggle('active');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar-menu');
    if (navbar) {
        navbar.classList.toggle('active');
    }
}

// ============================================
// FORM HANDLING
// ============================================

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        showAlert('Please fill all required fields', 'error');
        return;
    }

    // Show loading
    showLoading();

    // Simulate API call
    setTimeout(() => {
        hideLoading();
        showAlert('Form submitted successfully!', 'success');
        
        // Store data in localStorage for demo
        const data = Object.fromEntries(formData);
        localStorage.setItem(form.id, JSON.stringify(data));
        
        // Reset form
        form.reset();
    }, 1500);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    for (let input of inputs) {
        if (!input.value.trim()) {
            input.focus();
            return false;
        }
    }
    
    return true;
}

// ============================================
// ALERT FUNCTIONS (SweetAlert)
// ============================================

function showAlert(message, type = 'info', title = '') {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonColor: '#5B4FFF',
            confirmButtonText: 'OK',
            animation: true
        });
    } else {
        alert(message);
    }
}

function showConfirm(message, callback, title = 'Confirm') {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: title,
            text: message,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#5B4FFF',
            cancelButtonColor: '#FF6B6B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                callback(true);
            } else {
                callback(false);
            }
        });
    } else {
        if (confirm(message)) {
            callback(true);
        } else {
            callback(false);
        }
    }
}

// ============================================
// LOADING FUNCTIONS
// ============================================

function showLoading() {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: 'Loading',
            html: '<div class="spinner"></div>',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }
}

function hideLoading() {
    if (typeof Swal !== 'undefined') {
        Swal.close();
    }
}

// ============================================
// USER DATA FUNCTIONS
// ============================================

function loadUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
        const user = JSON.parse(userData);
        updateUserDisplay(user);
    }
}

function updateUserDisplay(user) {
    const userNameElement = document.getElementById('userName');
    const userRoleElement = document.getElementById('userRole');
    const userPhotoElement = document.getElementById('userPhoto');

    if (userNameElement) userNameElement.textContent = user.name || 'User';
    if (userRoleElement) userRoleElement.textContent = user.role || 'Student';
    if (userPhotoElement && user.photo) userPhotoElement.src = user.photo;
}

function saveUserData(user) {
    localStorage.setItem('userData', JSON.stringify(user));
    updateUserDisplay(user);
}

// ============================================
// LOGIN/LOGOUT FUNCTIONS
// ============================================

function handleLogin(role) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        showAlert('Please enter email and password', 'error');
        return;
    }

    showLoading();

    setTimeout(() => {
        hideLoading();
        
        const userData = {
            name: email.split('@')[0],
            email: email,
            role: role,
            loginTime: new Date().toLocaleString()
        };

        saveUserData(userData);
        showAlert('Login successful!', 'success');
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    }, 1500);
}

function handleLogout() {
    showConfirm('Are you sure you want to logout?', (confirmed) => {
        if (confirmed) {
            localStorage.removeItem('userData');
            showAlert('Logged out successfully!', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    });
}

// ============================================
// FILE UPLOAD FUNCTIONS
// ============================================

function handleFileUpload(input) {
    const file = input.files[0];
    
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showAlert('File size must be less than 5MB', 'error');
        input.value = '';
        return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
        showAlert('Only JPG, PNG, and PDF files are allowed', 'error');
        input.value = '';
        return;
    }

    // Show preview for images
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = input.parentElement.querySelector('.file-preview');
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
}

// ============================================
// SEARCH FUNCTIONS
// ============================================

function searchTable(tableId, searchTerm) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const rows = table.querySelectorAll('tbody tr');
    const term = searchTerm.toLowerCase();

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    });
}

// ============================================
// FILTER FUNCTIONS
// ============================================

function filterByStatus(status) {
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const statusCell = row.querySelector('[data-status]');
        if (statusCell) {
            const rowStatus = statusCell.getAttribute('data-status');
            row.style.display = (status === 'all' || rowStatus === status) ? '' : 'none';
        }
    });
}

// ============================================
// PAGINATION FUNCTIONS
// ============================================

function paginate(items, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
        items: items.slice(startIndex, endIndex),
        totalPages: totalPages,
        currentPage: currentPage
    };
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

function exportToCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    if (!table) return;

    let csv = [];
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        const cols = row.querySelectorAll('td, th');
        let csvRow = [];
        cols.forEach(col => {
            csvRow.push('"' + col.textContent + '"');
        });
        csv.push(csvRow.join(','));
    });

    downloadCSV(csv.join('\n'), filename);
}

function downloadCSV(csv, filename) {
    const link = document.createElement('a');
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    link.download = filename + '.csv';
    link.click();
}

// ============================================
// PRINT FUNCTIONS
// ============================================

function printElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print</title>');
    printWindow.document.write('<link rel="stylesheet" href="css/style.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(date) {
    return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function generateId() {
    return 'ID' + Date.now() + Math.random().toString(36).substr(2, 9);
}

// ============================================
// CHART FUNCTIONS (for analytics)
// ============================================

function createChart(canvasId, type, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
        type: type,
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            ...options
        }
    });
}

// ============================================
// NOTIFICATION FUNCTIONS
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#51CF66' : type === 'error' ? '#FF6B6B' : '#4ECDC4'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInDown 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInDown 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// DARK MODE TOGGLE
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function initializeDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// ============================================
// EXPORT FUNCTIONS FOR USE
// ============================================

window.UniversityPortal = {
    showAlert,
    showConfirm,
    handleLogin,
    handleLogout,
    handleFileUpload,
    searchTable,
    filterByStatus,
    exportToCSV,
    printElement,
    formatDate,
    formatTime,
    generateId,
    showNotification,
    toggleDarkMode
};
