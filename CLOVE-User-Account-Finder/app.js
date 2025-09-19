// CLOVE Account Finder JavaScript
class CLOVEAccountFinder {
    constructor() {
        this.accounts = [
            {
                "names": "Costales",
                "year_level": "Irregular",
                "mode": "n",
                "email": "nonadaptive1@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Azurin",
                "year_level": "Irregular",
                "mode": "n",
                "email": "nonadaptive2@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Aquino",
                "year_level": "1st Year",
                "mode": "n",
                "email": "nonadaptive3@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Sobrepeña",
                "year_level": "1st Year",
                "mode": "n",
                "email": "nonadaptive4@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Giron",
                "year_level": "1st Year",
                "mode": "n",
                "email": "nonadaptive5@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Villacruz",
                "year_level": "1st Year",
                "mode": "n",
                "email": "nonadaptive6@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Acuña",
                "year_level": "1st Year",
                "mode": "n",
                "email": "nonadaptive7@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Villaceran",
                "year_level": "2nd Year",
                "mode": "n",
                "email": "nonadaptive8@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Suan",
                "year_level": "2nd Year",
                "mode": "n",
                "email": "nonadaptive9@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Entredicho",
                "year_level": "2nd Year",
                "mode": "n",
                "email": "nonadaptive10@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Ariscon",
                "year_level": "2nd Year",
                "mode": "n",
                "email": "nonadaptive11@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Martin",
                "year_level": "2nd Year",
                "mode": "n",
                "email": "nonadaptive12@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Laderas",
                "year_level": "3rd Year",
                "mode": "n",
                "email": "nonadaptive13@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Sulla.",
                "year_level": "3rd Year",
                "mode": "n",
                "email": "nonadaptive14@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Reantaso",
                "year_level": "3rd Year",
                "mode": "n",
                "email": "nonadaptive15@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Lovete",
                "year_level": "3rd Year",
                "mode": "n",
                "email": "nonadaptive16@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Sexiona",
                "year_level": "3rd Year",
                "mode": "n",
                "email": "nonadaptive17@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Delgado",
                "year_level": "4th Year",
                "mode": "n",
                "email": "nonadaptive18@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Pizarro",
                "year_level": "4th Year",
                "mode": "n",
                "email": "nonadaptive19@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Ramirez",
                "year_level": "4th Year",
                "mode": "n",
                "email": "nonadaptive20@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Silao",
                "year_level": "4th Year",
                "mode": "n",
                "email": "nonadaptive21@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Sibayan",
                "year_level": "4th Year",
                "mode": "n",
                "email": "nonadaptive22@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Santos",
                "year_level": "Irregular",
                "mode": "a",
                "email": "adaptive1@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Villalon",
                "year_level": "Irregular",
                "mode": "a",
                "email": "adaptive2@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Recto",
                "year_level": "Irregular",
                "mode": "a",
                "email": "adaptive3@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Manaig",
                "year_level": "1st Year",
                "mode": "a",
                "email": "adaptive4@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Pancho",
                "year_level": "1st Year",
                "mode": "a",
                "email": "adaptive5@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Iglesia",
                "year_level": "1st Year",
                "mode": "a",
                "email": "adaptive6@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Ceñido",
                "year_level": "1st Year",
                "mode": "a",
                "email": "adaptive7@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Abo-abo",
                "year_level": "1st Year",
                "mode": "a",
                "email": "adaptive8@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Villanueva",
                "year_level": "2nd Year",
                "mode": "a",
                "email": "adaptive9@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Vasquez",
                "year_level": "2nd Year",
                "mode": "a",
                "email": "adaptive10@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Borboran",
                "year_level": "2nd Year",
                "mode": "a",
                "email": "adaptive11@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Napa",
                "year_level": "2nd Year",
                "mode": "a",
                "email": "adaptive12@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Mercadal",
                "year_level": "2nd Year",
                "mode": "a",
                "email": "adaptive13@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Magallanes",
                "year_level": "3rd Year",
                "mode": "a",
                "email": "adaptive14@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Dejito",
                "year_level": "3rd Year",
                "mode": "a",
                "email": "adaptive15@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Lagman",
                "year_level": "3rd Year",
                "mode": "a",
                "email": "adaptive16@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Melu",
                "year_level": "3rd Year",
                "mode": "a",
                "email": "adaptive17@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Almonte",
                "year_level": "3rd Year",
                "mode": "a",
                "email": "adaptive18@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Reyes",
                "year_level": "4th Year",
                "mode": "a",
                "email": "adaptive19@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Sios-e",
                "year_level": "4th Year",
                "mode": "a",
                "email": "adaptive20@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Catayong",
                "year_level": "4th Year",
                "mode": "a",
                "email": "adaptive21@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Delicano",
                "year_level": "4th Year",
                "mode": "a",
                "email": "adaptive22@clove.com",
                "password": "dangalngbayan"
            },
            {
                "names": "Enriquez",
                "year_level": "4th Year",
                "mode": "a",
                "email": "adaptive23@clove.com",
                "password": "dangalngbayan"
            }
        ];
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.searchForm = document.getElementById('searchForm');
        this.surnameInput = document.getElementById('surnameInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        this.btnText = this.searchBtn.querySelector('.btn-text');
        this.resultsSection = document.getElementById('resultsSection');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.notFoundContainer = document.getElementById('notFoundContainer');
        this.tryAgainBtn = document.getElementById('tryAgainBtn');
    }

    bindEvents() {
        // Add event listener for form submission
        if (this.searchForm) {
            this.searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSearch(e);
            });
        }

        // Add event listener for try again button
        if (this.tryAgainBtn) {
            this.tryAgainBtn.addEventListener('click', () => this.clearResults());
        }
        
        // Auto-focus on input when page loads
        if (this.surnameInput) {
            this.surnameInput.focus();
        }

        // Add Enter key support
        if (this.surnameInput) {
            this.surnameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearch(e);
                }
            });
        }
    }

    async handleSearch(e) {
        if (e) e.preventDefault();
        
        const surname = this.surnameInput.value.trim();
        if (!surname) {
            this.showError('Please enter a surname');
            return;
        }

        console.log('Starting search for:', surname);

        // Clear previous results
        this.clearResults();
        
        this.showLoading(true);
        
        try {
            // Simulate search delay for better UX
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const account = this.findAccount(surname);
            
            if (account) {
                console.log('Account found, displaying results');
                this.displayAccount(account);
            } else {
                console.log('No account found, showing not found message');
                this.showNotFound();
            }
        } catch (error) {
            console.error('Search error:', error);
            this.showError('An error occurred while searching. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    findAccount(searchSurname) {
        const normalizedSearch = this.normalizeSurname(searchSurname);
        console.log('Searching for normalized surname:', normalizedSearch);
        
        const found = this.accounts.find(account => {
            const accountSurname = this.normalizeSurname(account.names);
            const match = accountSurname === normalizedSearch;
            if (match) {
                console.log(`Found match: "${normalizedSearch}" matches "${accountSurname}"`);
            }
            return match;
        });
        
        console.log('Search result:', found ? 'Found' : 'Not found');
        return found;
    }

    normalizeSurname(surname) {
        if (!surname) return '';
        
        // Convert to lowercase and remove extra spaces
        let normalized = surname.toLowerCase().trim();
        
        // Remove special characters including periods, keeping only alphanumeric, spaces, and hyphens
        normalized = normalized.replace(/[^a-z0-9\s-]/g, '');
        
        // Normalize multiple spaces to single space
        normalized = normalized.replace(/\s+/g, ' ').trim();
        
        return normalized;
    }

    displayAccount(account) {
        const modeText = account.mode === 'a' ? 'Adaptive' : 'Non-Adaptive';
        const modeClass = account.mode === 'a' ? 'mode-adaptive' : 'mode-non-adaptive';
        
        const accountHTML = `
            <div class="account-card">
                <div class="account-header">
                    <h3 class="account-name">${this.escapeHtml(account.names)}</h3>
                </div>
                <div class="account-details">
                    <div class="mode-year-row">
                        <div class="detail-item">
                            <span class="detail-label">Learning Mode</span>
                            <span class="mode-badge ${modeClass}">${modeText}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Year Level</span>
                            <div class="year-level-value">${this.escapeHtml(account.year_level)}</div>
                        </div>
                    </div>
                    <div class="email-password-row">
                        <div class="detail-item">
                            <span class="detail-label">Email Address</span>
                            <div class="detail-value">${this.escapeHtml(account.email)}</div>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Password</span>
                            <div class="detail-value">${this.escapeHtml(account.password)}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.resultsContainer.innerHTML = accountHTML;
        this.showResults();
    }

    showNotFound() {
        this.hideResults();
        if (this.notFoundContainer) {
            this.notFoundContainer.classList.remove('hidden');
        }
    }

    showResults() {
        this.hideNotFound();
        if (this.resultsContainer) {
            this.resultsContainer.classList.remove('hidden');
        }
    }

    hideResults() {
        if (this.resultsContainer) {
            this.resultsContainer.classList.add('hidden');
        }
    }

    hideNotFound() {
        if (this.notFoundContainer) {
            this.notFoundContainer.classList.add('hidden');
        }
    }

    clearResults() {
        this.hideResults();
        this.hideNotFound();
        if (this.surnameInput) {
            this.surnameInput.focus();
        }
    }

    showLoading(show) {
        if (show) {
            if (this.searchBtn) this.searchBtn.disabled = true;
            if (this.btnText) this.btnText.classList.add('hidden');
            if (this.loadingSpinner) this.loadingSpinner.classList.remove('hidden');
        } else {
            if (this.searchBtn) this.searchBtn.disabled = false;
            if (this.btnText) this.btnText.classList.remove('hidden');
            if (this.loadingSpinner) this.loadingSpinner.classList.add('hidden');
        }
    }

    showError(message) {
        alert(message);
        if (this.surnameInput) {
            this.surnameInput.focus();
        }
    }

    escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CLOVE Account Finder');
    new CLOVEAccountFinder();
});