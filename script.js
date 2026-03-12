// Authentication state
let isSignUp = false;
let currentSection = 'domains';
let selectedCompany = null;

// Toggle between Sign Up and Sign In modes
function toggleAuthMode() {
    isSignUp = !isSignUp;
    const nameGroup = document.querySelector('.name-group');
    const authTitle = document.getElementById('auth-title');
    const authButton = document.getElementById('auth-button');
    const toggleButton = document.querySelector('.left-section button');

    if (isSignUp) {
        nameGroup.style.display = 'none';
        authTitle.textContent = 'Sign In';
        authButton.textContent = 'Sign In';
        toggleButton.textContent = 'Create Account';
    } else {

        nameGroup.style.display = 'block';
        authTitle.textContent = 'Create Account';
        authButton.textContent = 'Sign Up';
        toggleButton.textContent = 'Sign In Instead';
    }
}

// Handle authentication form submission
function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
        initializeApp();
    }
}

// Handle logout
function logout() {
    document.getElementById('auth-container').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
    document.getElementById('auth-form').reset();
    isSignUp = false;
    toggleAuthMode();
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Show different sections
function showSection(sectionName) {
    currentSection = sectionName;

    // Hide all sections
    document.getElementById('domains-section').style.display = 'none';
    document.getElementById('interviews-section').style.display = 'none';
    document.getElementById('experiences-section').style.display = 'none';
    document.getElementById('suggestions-section').style.display = 'none';

    // Show selected section
    document.getElementById(`${sectionName}-section`).style.display = 'block';

    // Update active button
    document.querySelectorAll('.section-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(sectionName)) {
            btn.classList.add('active');
        }
    });

    // Reset views
    if (sectionName === 'interviews') {
        showCompanies();
    } else if (sectionName === 'experiences') {
        renderPeerExperiences();
    } else if (sectionName === 'suggestions') {
        renderSuggestions();
    }
}

// Create domain card
function createDomainCard(domain) {
    const card = document.createElement('div');
    card.className = 'domain-card';

    card.innerHTML = `
        <div class="domain-icon">
            <i class="fas ${domain.icon}"></i>
        </div>
        <h3 class="domain-title">${domain.title}</h3>
        <p class="domain-description">${domain.description}</p>
        <div class="roadmap">
            <h4>Roadmap:</h4>
            <ul>
                ${domain.roadmap.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Add click event to show details in a new page
    card.addEventListener('click', () => {
        if (domain.resources) {
            showDomainDetails(domain.title);
        }
    });

    return card;
}

// Show domain notes in a new page
function showDomainDetails(domainTitle) {
    const domain = domains.find(d => d.title === domainTitle);
    if (!domain) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mainContainer = document.getElementById('domains-section'); // Assuming domains-section is the main container for domains content

    // Create view container
    const view = document.createElement('div');
    view.className = 'notes-view';

    const headerHtml = `
        <div class="notes-header">
            <button class="back-btn" onclick="showDomainsGrid()"><i class="fas fa-arrow-left"></i> Back</button>
            <div class="domain-title-group">
                <i class="fas ${domain.icon}"></i>
                <h1>${domain.title}</h1>
            </div>
            <p>${domain.description}</p>
        </div>

        <div class="domain-tabs">
            <button class="tab-btn active" data-tab="resources">
                <i class="fas fa-book-open"></i> Resources
            </button>
            <button class="tab-btn" data-tab="interview">
                <i class="fas fa-question-circle"></i> Interview Questions
            </button>
            <button class="tab-btn" data-tab="key-points">
                <i class="fas fa-lightbulb"></i> Key Points
            </button>
        </div>

        <div class="tab-content-container">
            <div id="resources-tab" class="tab-pane active">
                <div class="notes-grid">
                    ${domain.resources.map(resource => `
                        <div class="note-card">
                            <h3>${resource.title}</h3>
                            <p>${resource.content}</p>
                            <div class="resource-links">
                                <a href="${resource.videoUrl}" target="_blank" class="video-link">
                                    <i class="fab fa-youtube"></i> Watch Tutorial
                                </a>
                                ${resource.mdnUrl ? `
                                <a href="${resource.mdnUrl}" target="_blank" class="mdn-link">
                                    <i class="fas fa-file-alt"></i> Read Documentation
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div id="interview-tab" class="tab-pane">
                <div class="interview-grid">
                    ${(domain.interviewQuestions || []).map((iq, index) => `
                        <div class="interview-card">
                            <div class="question">
                                <span>Q${index + 1}:</span> ${iq.q}
                            </div>
                            <div class="answer">
                                <span>A:</span> ${iq.a}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div id="key-points-tab" class="tab-pane">
                <div class="key-points-list">
                    ${(domain.keyPoints || []).map(point => `
                        <div class="key-point-item">
                            <i class="fas fa-check-circle"></i>
                            <p>${point}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    view.innerHTML = headerHtml;

    // Clear main container and append notes view
    mainContainer.innerHTML = '';
    mainContainer.appendChild(view);

    // Tab interaction logic
    const tabs = view.querySelectorAll('.tab-btn');
    const panes = view.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Update active states
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            view.querySelector(`#${target}-tab`).classList.add('active');
        });
    });
}

// Show domains grid
function showDomainsGrid() {
    const domainsSection = document.getElementById('domains-section');
    domainsSection.innerHTML = '<div class="domains-grid" id="domains-grid"></div>';
    const domainsGrid = document.getElementById('domains-grid');
    domains.forEach(domain => {
        domainsGrid.appendChild(createDomainCard(domain));
    });
}

// Create company card
function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';

    card.innerHTML = `
        <div class="company-icon">
            <i class="${company.icon}"></i>
        </div>
        <h3>${company.name}</h3>
    `;

    card.addEventListener('click', () => showQuestions(company));

    return card;
}

// Show companies grid
function showCompanies() {
    const companiesGrid = document.getElementById('companies-grid');
    const questionsList = document.getElementById('questions-list');

    companiesGrid.style.display = 'grid';
    questionsList.style.display = 'none';

    companiesGrid.innerHTML = '';
    companies.forEach(company => {
        companiesGrid.appendChild(createCompanyCard(company));
    });
}

// Show questions for selected company
function showQuestions(company) {
    const companiesGrid = document.getElementById('companies-grid');
    const questionsList = document.getElementById('questions-list');

    companiesGrid.style.display = 'none';
    questionsList.style.display = 'block';

    questionsList.innerHTML = `
        <div class="questions-header">
            <button onclick="showCompanies()" class="back-btn">
                <i class="fas fa-arrow-left"></i> Back to Companies
            </button>
            <h2>${company.name} Questions</h2>
        </div>
        <div class="questions-container">
            ${company.questions.map((q, index) => `
                <div class="question-item">
                    <span>${index + 1}. ${q.title}</span>
                    <a href="${q.url}" target="_blank">Solve <i class="fas fa-external-link-alt"></i></a>
                </div>
            `).join('')}
        </div>
    `;
}

// Peer Experiences Implementation
function renderPeerExperiences() {
    const section = document.getElementById('experiences-section');
    section.innerHTML = `
        <div id="experiences-grid" class="experiences-grid"></div>
        <div id="experience-detail-view" class="experience-detail" style="display: none;"></div>
    `;

    const grid = document.getElementById('experiences-grid');

    peerExperiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.innerHTML = `
            <div class="exp-photo">
                <img src="${exp.photo}" alt="${exp.name}">
            </div>
            <div class="exp-info">
                <h3>${exp.name}</h3>
                <p class="branch">${exp.branch}</p>
                <div class="meta">
                    <span><i class="fas fa-calendar-alt"></i> ${exp.year}</span>
                    <span><i class="fas fa-briefcase"></i> ${exp.package}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => showExperienceDetail(exp));
        grid.appendChild(card);
    });
}

function showExperienceDetail(exp) {
    const grid = document.getElementById('experiences-grid');
    const detailView = document.getElementById('experience-detail-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    grid.style.display = 'none';
    detailView.style.display = 'block';

    detailView.innerHTML = `
        <button class="back-btn" onclick="hideExperienceDetail()">
            <i class="fas fa-arrow-left"></i> Back to Experiences
        </button>
        <div class="detail-header">
            <img src="${exp.photo}" alt="${exp.name}">
            <div class="header-info">
                <h1>${exp.name}'s Interview Journey</h1>
                <p>${exp.branch} | Class of ${exp.year} | ${exp.package}</p>
            </div>
        </div>
        <div class="process-timeline">
            ${exp.process.map((step, index) => `
                <div class="timeline-item">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <h3>${step.round}</h3>
                        <p>${step.detail}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function hideExperienceDetail() {
    const grid = document.getElementById('experiences-grid');
    const detailView = document.getElementById('experience-detail-view');
    grid.style.display = 'grid';
    detailView.style.display = 'none';
}

// Suggestions Implementation
function renderSuggestions() {
    const grid = document.getElementById('suggestions-grid');
    grid.innerHTML = '';

    peerExperiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'suggestion-card';
        card.innerHTML = `
            <div class="suggestion-quote">
                <i class="fas fa-quote-left"></i>
                <p>${exp.suggestion}</p>
            </div>
            <div class="suggestion-author" onclick="showSection('experiences'); showExperienceDetail(${JSON.stringify(exp).replace(/"/g, '&quot;')})">
                <img src="${exp.photo}" alt="${exp.name}">
                <div class="author-info">
                    <h4>${exp.name}</h4>
                    <p>${exp.package}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initialize the application
function initializeApp() {
    // Populate initial views
    showDomainsGrid();
    renderPeerExperiences();
    renderSuggestions();

    // Show initial section
    showSection('domains');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial auth mode
    toggleAuthMode();
});
