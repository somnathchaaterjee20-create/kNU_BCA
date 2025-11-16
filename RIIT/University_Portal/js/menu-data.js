// সমস্ত ৫০০+ ফিচার ডেটা
const menuData = [
    {
        id: 'students',
        icon: 'fas fa-users',
        title: 'Students',
        items: [
            { name: '📝 Admission Form', link: 'forms/student-admission.html' },
            { name: '📋 Registration Form', link: 'forms/student-registration.html' },
            { name: '📨 Application Form', link: 'forms/student-application.html' },
            { name: '🎫 ID Card Apply', link: 'forms/student-id-card.html' },
            { name: '👥 Student List', link: 'lists/student-list.html' },
            { name: '📄 Student Details', link: '#' },
            { name: '✏️ Edit Student', link: '#' },
            { name: '📤 Document Upload', link: '#' },
            { name: '📥 Document Download', link: '#' },
            { name: '🚫 Deactivation', link: '#' },
            { name: '🔍 Search Student', link: '#' },
            { name: '🆔 Auto ID', link: '#' },
            { name: '📑 Auto Reg Number', link: '#' },
            { name: '📦 Bulk Import', link: '#' },
            { name: '💾 Export', link: '#' }
        ]
    },
    {
        id: 'courses',
        icon: 'fas fa-book',
        title: 'Courses',
        items: [
            { name: '🎓 BCA', link: '#' },
            { name: '💼 BBA', link: '#' },
            { name: '💻 MCA', link: '#' },
            { name: '📊 MBA', link: '#' },
            { name: '📚 Course List', link: 'lists/course-list.html' },
            { name: '➕ Add Course', link: '#' },
            { name: '✏️ Update', link: '#' },
            { name: '🗑️ Delete', link: '#' },
            { name: '📖 Subject List', link: 'lists/subject-list.html' },
            { name: '➕ Add Subject', link: '#' },
            { name: '✏️ Update Subject', link: '#' },
            { name: '🗑️ Delete Subject', link: '#' },
            { name: '👤 Assign to Student', link: '#' },
            { name: '📅 Semester Assign', link: '#' },
            { name: '⚙️ Settings', link: '#' }
        ]
    },
    {
        id: 'semesters',
        icon: 'fas fa-calendar-alt',
        title: 'Semesters',
        items: [
            { name: '📋 Semester List', link: 'lists/semester-list.html' },
            { name: '⚙️ Settings', link: '#' },
            { name: '📅 Start Date', link: '#' },
            { name: '📅 End Date', link: '#' },
            { name: '⏱️ Duration', link: '#' },
            { name: '💰 Fees', link: '#' },
            { name: '📚 Subjects', link: '#' }
        ]
    },
    {
        id: 'class-management',
        icon: 'fas fa-clock',
        title: 'Class Management',
        items: [
            { name: '📅 Schedule', link: '#' },
            { name: '📋 Routine', link: '#' },
            { name: '📅 Weekly', link: '#' },
            { name: '📅 Monthly', link: '#' },
            { name: '📝 Lecture Notes', link: '#' },
            { name: '📚 Materials', link: '#' },
            { name: '🎥 Video Link', link: '#' },
            { name: '💻 Virtual Link', link: '#' },
            { name: '🔗 Zoom Link', link: '#' },
            { name: '🔗 Google Meet', link: '#' },
            { name: '❌ Cancellation', link: '#' },
            { name: '🔄 Reschedule', link: '#' },
            { name: '✅ Attendance', link: '#' },
            { name: '⭐ Feedback', link: '#' },
            { name: '📊 Report', link: '#' }
        ]
    },
    {
        id: 'attendance',
        icon: 'fas fa-check-circle',
        title: 'Attendance',
        items: [
            { name: '👤 Student', link: '#' },
            { name: '👨‍🏫 Teacher List', link: 'lists/teacher-list.html' },
            { name: '👥 Staff List', link: 'lists/staff-list.html' },
            { name: '📊 Report', link: '#' },
            { name: '📅 Daily', link: '#' },
            { name: '📅 Monthly', link: '#' },
            { name: '📱 QR Code', link: '#' },
            { name: '📱 NFC', link: '#' },
            { name: '🔔 Alerts', link: '#' },
            { name: '📋 Summary', link: '#' },
            { name: '👁️ Biometric', link: '#' },
            { name: '😊 Facial', link: '#' },
            { name: '✏️ Correction', link: '#' },
            { name: '📈 Analytics', link: '#' },
            { name: '💾 Export', link: '#' }
        ]
    },
    {
        id: 'exam-system',
        icon: 'fas fa-file-alt',
        title: 'Exam System',
        items: [
            { name: '📅 Exam Schedule', link: 'lists/exam-schedule.html' },
            { name: '🪑 Seating Plan', link: '#' },
            { name: '🔬 Practical', link: '#' },
            { name: '💬 Viva', link: '#' },
            { name: '💻 Online', link: '#' },
            { name: '⏱️ Timer', link: '#' },
            { name: '📤 Submission', link: '#' },
            { name: '🎫 Hall Ticket', link: '#' },
            { name: '📄 Admit Card', link: '#' },
            { name: '📢 Notice', link: '#' },
            { name: '🛡️ Anti-Cheat', link: '#' },
            { name: '📚 Question Bank', link: '#' },
            { name: '📄 Paper Upload', link: '#' },
            { name: '✅ Evaluation', link: '#' },
            { name: '📊 Analytics', link: '#' }
        ]
    },
    {
        id: 'results',
        icon: 'fas fa-chart-bar',
        title: 'Results',
        items: [
            { name: '📝 Marks Input', link: '#' },
            { name: '🔢 Total Marks', link: '#' },
            { name: '✅ Passing Marks', link: '#' },
            { name: '📊 Obtained Marks', link: '#' },
            { name: '📈 Percentage', link: '#' },
            { name: '🎓 Grade', link: '#' },
            { name: '✔️ Pass/Fail', link: '#' },
            { name: '🏆 Rank', link: '#' },
            { name: '📊 CGPA', link: '#' },
            { name: '📊 GPA', link: '#' },
            { name: '📄 Marksheet', link: '#' },
            { name: '📋 Report Card', link: '#' },
            { name: '🔄 Real-Time Update', link: '#' },
            { name: '🔍 By Roll No', link: '#' },
            { name: '🔍 By Reg No', link: '#' }
        ]
    },
    {
        id: 'fees-payment',
        icon: 'fas fa-credit-card',
        title: 'Fees & Payment',
        items: [
            { name: '🔢 Auto Calculate', link: '#' },
            { name: '📊 Payment Records', link: 'lists/payment-records.html' }
        ]
    },
    {
        id: 'library',
        icon: 'fas fa-book-open',
        title: 'Library',
        items: [
            { name: '🔍 Search', link: '#' },
            { name: '📤 Borrow', link: '#' },
            { name: '📥 Return', link: '#' },
            { name: '✅ Availability', link: '#' },
            { name: '💰 Fine', link: '#' },
            { name: '📱 E-Books', link: '#' },
            { name: '💻 Digital', link: '#' },
            { name: '📰 Journals', link: '#' },
            { name: '📄 Papers', link: '#' },
            { name: '👤 Membership', link: '#' },
            { name: '📌 Reservation', link: '#' },
            { name: '📚 Library Books', link: 'lists/library-books.html' }
        ]
    },
    {
        id: 'hostel',
        icon: 'fas fa-building',
        title: 'Hostel',
        items: [
            { name: '🏨 Hostel List', link: 'lists/hostel-list.html' }
        ]
    },
    {
        id: 'transport',
        icon: 'fas fa-bus',
        title: 'Transport',
        items: [
            { name: '🚌 Transport Routes', link: 'lists/transport-list.html' }
        ]
    },
    {
        id: 'communication',
        icon: 'fas fa-comments',
        title: 'Communication',
        items: [
            { name: '💬 Student Chat', link: '#' },
            { name: '💬 Teacher Chat', link: '#' },
            { name: '💬 Admin Chat', link: '#' },
            { name: '👥 Group Chat', link: '#' },
            { name: '🗣️ Forum', link: '#' },
            { name: '💭 Discussion', link: '#' },
            { name: '🔔 Alerts', link: '#' },
            { name: '📎 File Upload', link: '#' },
            { name: '🎤 Voice', link: '#' },
            { name: '🎥 Video', link: '#' },
            { name: '📢 Announcements', link: '#' },
            { name: '🔔 Notifications', link: '#' },
            { name: '📧 Email', link: '#' },
            { name: '📱 SMS', link: '#' },
            { name: '🔔 Push', link: '#' }
        ]
    },
    {
        id: 'notices-events',
        icon: 'fas fa-bell',
        title: 'Notices & Events',
        items: [
            { name: '📌 Notice Board', link: '#' },
            { name: '🎉 Events List', link: 'lists/events-list.html' }
        ]
    },
    {
        id: 'certificates',
        icon: 'fas fa-certificate',
        title: 'Certificates',
        items: [
            { name: '📜 Certificates List', link: 'lists/certificates-list.html' }
        ]
    },
    {
        id: 'analytics',
        icon: 'fas fa-chart-pie',
        title: 'Analytics',
        items: [
            { name: '📊 Attendance', link: '#' },
            { name: '📊 Results', link: '#' },
            { name: '📊 Courses', link: '#' },
            { name: '💰 Payment', link: '#' },
            { name: '📈 Performance', link: '#' },
            { name: '👨‍🏫 Faculty Report', link: '#' },
            { name: '📝 Exam Analysis', link: '#' },
            { name: '🏆 Rank Analysis', link: '#' },
            { name: '📈 Pass Rate', link: '#' },
            { name: '📊 CGPA Trend', link: '#' },
            { name: '📖 Subject Wise', link: '#' },
            { name: '🏆 Topper List', link: '#' },
            { name: '❌ Failed List', link: '#' },
            { name: '🤖 AI Performance', link: '#' },
            { name: '🤖 AI Prediction', link: '#' }
        ]
    },
    {
        id: 'settings',
        icon: 'fas fa-cog',
        title: 'Settings',
        items: [
            { name: '👤 Profile', link: '#' },
            { name: '🔐 Password', link: '#' },
            { name: '🔔 Notifications', link: '#' },
            { name: '🔒 Privacy', link: '#' },
            { name: '🎨 Theme', link: '#' },
            { name: '🌙 Dark Mode', link: '#' },
            { name: '☀️ Light Mode', link: '#' },
            { name: '🌐 Language', link: '#' },
            { name: '🎨 UI Custom', link: '#' },
            { name: '📤 Export', link: '#' },
            { name: '📥 Import', link: '#' },
            { name: '🔌 API', link: '#' },
            { name: '🪝 Webhooks', link: '#' },
            { name: '📋 Logs', link: '#' },
            { name: '📊 Activity', link: '#' }
        ]
    },
    {
        id: 'help-support',
        icon: 'fas fa-question-circle',
        title: 'Help & Support',
        items: [
            { name: '⚠️ Complaints', link: 'lists/complaints-list.html' },
            { name: '❓ Help Center', link: '#' },
            { name: '📖 User Guide', link: '#' },
            { name: '🎥 Tutorials', link: '#' },
            { name: '❓ FAQ', link: '#' },
            { name: '📞 Contact', link: '#' },
            { name: '🎫 Ticket', link: '#' },
            { name: '💬 Live Chat', link: '#' },
            { name: '🐛 Issue Tracker', link: '#' },
            { name: '⭐ Feedback', link: '#' },
            { name: '📝 Report', link: '#' },
            { name: '💭 Feedback Form', link: '#' },
            { name: '📚 Knowledge Base', link: '#' },
            { name: '👥 Community', link: '#' },
            { name: '🆘 Emergency', link: '#' }
        ]
    },
    {
        id: 'online-learning',
        icon: 'fas fa-video',
        title: 'Online Learning',
        items: [
            { name: '🎥 Videos', link: '#' },
            { name: '❓ Quiz', link: '#' },
            { name: '📤 Assignment Upload', link: '#' },
            { name: '📥 Assignment Download', link: '#' },
            { name: '📊 Grades', link: '#' },
            { name: '📤 Project Upload', link: '#' },
            { name: '👥 Group Project', link: '#' },
            { name: '💻 Virtual Class', link: '#' },
            { name: '📋 Lesson Plan', link: '#' },
            { name: '📚 Study Materials', link: '#' },
            { name: '📈 Progress', link: '#' },
            { name: '📊 Learning Analytics', link: '#' },
            { name: '🎓 Certification', link: '#' },
            { name: '✅ Completion', link: '#' },
            { name: '🛤️ Learning Path', link: '#' }
        ]
    },
    {
        id: 'staff-teacher',
        icon: 'fas fa-chalkboard-user',
        title: 'Staff & Teacher',
        items: [
            { name: '👨‍🏫 Teacher List', link: '#' },
            { name: '📄 Documents', link: '#' },
            { name: '✅ Attendance', link: '#' },
            { name: '💰 Salary', link: '#' },
            { name: '👥 Staff List', link: '#' },
            { name: '📋 Tasks', link: '#' },
            { name: '🎓 Training', link: '#' },
            { name: '⭐ Feedback', link: '#' },
            { name: '📝 Leave Applications', link: 'lists/leave-applications.html' },
            { name: '📊 Performance', link: '#' },
            { name: '📈 Evaluation', link: '#' },
            { name: '🎖️ Promotion', link: '#' },
            { name: '💰 Increment', link: '#' },
            { name: '📖 Directory', link: '#' }
        ]
    },
    {
        id: 'research-project',
        icon: 'fas fa-flask',
        title: 'Research & Project',
        items: [
            { name: '👥 Groups', link: '#' },
            { name: '📰 Journals', link: '#' },
            { name: '💰 Funding', link: '#' },
            { name: '📤 Submission', link: '#' },
            { name: '🔬 Lab Booking', link: '#' },
            { name: '📜 Patents', link: '#' },
            { name: '🎉 Events', link: '#' },
            { name: '🔬 Equipment', link: '#' },
            { name: '📋 Lab Rules', link: '#' },
            { name: '👥 Partners', link: '#' },
            { name: '📄 Papers', link: '#' },
            { name: '🤝 Collaboration', link: '#' },
            { name: '⚠️ Safety', link: '#' },
            { name: '📊 Analytics', link: '#' },
            { name: '📊 Publication', link: '#' }
        ]
    },
    {
        id: 'clubs-activities',
        icon: 'fas fa-users-alt',
        title: 'Clubs & Activities',
        items: [
            { name: '👥 Student Clubs', link: '#' },
            { name: '💻 Tech Club', link: '#' },
            { name: '📸 Photography', link: '#' },
            { name: '🎵 Music', link: '#' },
            { name: '🎨 Art', link: '#' },
            { name: '🎭 Drama', link: '#' },
            { name: '🔬 Science', link: '#' },
            { name: '🎮 Gaming', link: '#' },
            { name: '🎪 Cultural', link: '#' },
            { name: '⚽ Sports', link: '#' },
            { name: '👤 Membership', link: '#' },
            { name: '🎉 Events', link: '#' },
            { name: '💰 Funds', link: '#' },
            { name: '📊 Reports', link: '#' },
            { name: '📖 Directory', link: '#' }
        ]
    },
    {
        id: 'sports-system',
        icon: 'fas fa-basketball-ball',
        title: 'Sports System',
        items: [
            { name: '📅 Schedule', link: '#' },
            { name: '👥 Team', link: '#' },
            { name: '🏋️ Training', link: '#' },
            { name: '📝 Registration', link: '#' },
            { name: '📊 Results', link: '#' },
            { name: '👨‍🏫 Coach', link: '#' },
            { name: '🏆 Tournament', link: '#' },
            { name: '📢 Notice', link: '#' },
            { name: '🏆 Awards', link: '#' },
            { name: '🏋️ Gym', link: '#' },
            { name: '🏟️ Facilities', link: '#' },
            { name: '📊 Analytics', link: '#' },
            { name: '📈 Performance', link: '#' },
            { name: '🎉 Events', link: '#' },
            { name: '💰 Sponsorship', link: '#' }
        ]
    },
    {
        id: 'admin-panel',
        icon: 'fas fa-user-shield',
        title: 'Admin Panel',
        items: [
            { name: '👤 User Management', link: '#' },
            { name: '🔐 Role Permission', link: '#' },
            { name: '📊 Activity Logs', link: '#' },
            { name: '📋 System Logs', link: '#' },
            { name: '💾 Data Backup', link: '#' },
            { name: '♻️ Data Restore', link: '#' },
            { name: '📊 Dashboard', link: '#' },
            { name: '🔔 Notifications', link: '#' },
            { name: '📧 Email Settings', link: '#' },
            { name: '📱 SMS Settings', link: '#' },
            { name: '⚙️ System Settings', link: '#' },
            { name: '🔒 Security', link: '#' },
            { name: '🗄️ Database', link: '#' },
            { name: '🖥️ Server', link: '#' },
            { name: '🔄 Update', link: '#' }
        ]
    }
];

// মেনু রেন্ডার করার ফাংশন
function renderMenu() {
    const sidebarMenu = document.querySelector('.sidebar-menu');
    if (!sidebarMenu) return;

    // Dashboard লিঙ্ক যোগ করুন
    const dashboardItem = document.createElement('li');
    dashboardItem.className = 'sidebar-menu-item';
    dashboardItem.innerHTML = `
        <a href="dashboard.html" class="sidebar-menu-link">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
        </a>
    `;
    sidebarMenu.appendChild(dashboardItem);

    // সমস্ত মেনু আইটেম রেন্ডার করুন
    menuData.forEach(menu => {
        const menuItem = document.createElement('li');
        menuItem.className = 'sidebar-menu-item';
        menuItem.innerHTML = `
            <a href="#" class="sidebar-menu-link" onclick="toggleMenu(event, this)">
                <i class="${menu.icon}"></i>
                <span>${menu.title}</span>
                <i class="fas fa-chevron-down" style="font-size: 0.8rem; margin-left: auto;"></i>
            </a>
            <ul class="sidebar-submenu">
                ${menu.items.map(item => `
                    <li><a href="${item.link}" class="sidebar-submenu-link">${item.name}</a></li>
                `).join('')}
            </ul>
        `;
        sidebarMenu.appendChild(menuItem);
    });

    // Logout লিঙ্ক যোগ করুন
    const logoutItem = document.createElement('li');
    logoutItem.className = 'sidebar-menu-item';
    logoutItem.innerHTML = `
        <a href="#" class="sidebar-menu-link" onclick="handleLogout()">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
        </a>
    `;
    sidebarMenu.appendChild(logoutItem);
}

// মেনু টগল করার ফাংশন
function toggleMenu(event, element) {
    event.preventDefault();
    const parent = element.closest('.sidebar-menu-item');
    if (parent) {
        parent.classList.toggle('active');
    }
}

// পেজ লোড হলে মেনু রেন্ডার করুন
document.addEventListener('DOMContentLoaded', renderMenu);
