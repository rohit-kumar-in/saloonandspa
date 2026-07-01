/**
 * Glow & Grace Salon & Spa - Client-Side Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCountdownTimer();
    initServiceSelection();
    initDateValidation();
});

// 1. MOBILE DRAWER NAVIGATION MENU
function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable background scroll
    }

    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Enable background scroll
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// 2. 🚨 SIMULATED COUNTDOWN TIMER FOR URGENCY
function initCountdownTimer() {
    const timerElement = document.getElementById('countdownTimer');
    if (!timerElement) return;

    // Use a persistent countdown duration of 1h 45m stored in localStorage
    // or initialize a new one if not present, to keep it realistic across refreshes
    let timerSeconds = localStorage.getItem('salon_countdown_seconds');
    
    if (!timerSeconds || parseInt(timerSeconds) <= 0) {
        timerSeconds = (1 * 60 * 60) + (45 * 60); // 1 hour 45 minutes
    } else {
        timerSeconds = parseInt(timerSeconds);
    }

    function updateTimer() {
        if (timerSeconds <= 0) {
            // Reset to maintain continuous urgency for new sessions
            timerSeconds = (1 * 60 * 60) + (45 * 60);
        }

        timerSeconds--;
        localStorage.setItem('salon_countdown_seconds', timerSeconds);

        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;

        const formattedTime = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        timerElement.textContent = formattedTime;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// 3. SERVICES CATEGORIES TAB FILTER
function filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    const tabs = document.querySelectorAll('.tab-btn');

    // Update active tab styling
    tabs.forEach(tab => {
        const onClickAttr = tab.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${category}'`)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Show/Hide Cards
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'flex';
        } else {
            const cardCat = card.getAttribute('data-category');
            if (cardCat === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 4. COPY COUPON SYSTEM
function copyCoupon(codeElementId, buttonElement) {
    const codeText = document.getElementById(codeElementId).innerText;
    
    // Copy code text to user's clipboard
    navigator.clipboard.writeText(codeText).then(() => {
        // Show success visual state
        buttonElement.innerText = "Copied!";
        buttonElement.classList.add('copied');

        // Automatically prefill coupon field in booking form
        const couponInput = document.getElementById('couponApplied');
        if (couponInput) {
            couponInput.value = codeText;
        }

        // Show Toast Notification
        showToast(`Code "${codeText}" copied & applied to form!`);

        // Reset button state after delay
        setTimeout(() => {
            buttonElement.innerText = "Copy Code";
            buttonElement.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy. Type ' + codeText + ' manually.');
    });
}

// TOAST TRIGGER UTILITY
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.innerText = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 5. BOOK NOW / SELECT SERVICE TRIGGER FROM CARDS & PACKAGES
function initServiceSelection() {
    const bookingButtons = document.querySelectorAll('.card-book-btn');
    const serviceSelect = document.getElementById('bookingService');

    bookingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceName = button.getAttribute('data-service');
            if (!serviceName) return;

            // Set option in dropdown
            if (serviceSelect) {
                let optionFound = false;
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
                        serviceSelect.selectedIndex = i;
                        optionFound = true;
                        break;
                    }
                }
                
                // If not found in default list (e.g. customized package), select closest or insert
                if (!optionFound) {
                    const newOpt = document.createElement('option');
                    newOpt.value = serviceName;
                    newOpt.text = serviceName;
                    serviceSelect.appendChild(newOpt);
                    serviceSelect.value = serviceName;
                }

                // Highlight select border briefly
                serviceSelect.style.borderColor = 'var(--primary)';
                serviceSelect.style.backgroundColor = 'var(--primary-light)';
                setTimeout(() => {
                    serviceSelect.style.borderColor = '';
                    serviceSelect.style.backgroundColor = '';
                }, 1000);
            }

            // Smooth Scroll to Booking Section
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                
                // Focus name input
                const nameInput = document.getElementById('clientName');
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 600);
                }
            }
        });
    });
}

// 6. DATE INPUT - ENFORCE TODAY OR FUTURE DATE ONLY
function initDateValidation() {
    const dateInput = document.getElementById('bookingDate');
    if (!dateInput) return;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    // Set minimum date to today (prevent booking in past)
    dateInput.min = `${year}-${month}-${day}`;
}

// 7. FORM SUBMISSION -> FORMAT DIRECT TO WHATSAPP API
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const service = document.getElementById('bookingService').value;
    const coupon = document.getElementById('couponApplied').value.trim().toUpperCase();
    const message = document.getElementById('clientMessage').value.trim();

    // Secondary 10-digit validation
    if (phone.length !== 10 || isNaN(phone)) {
        showToast('Please enter a valid 10-digit phone number.');
        return;
    }

    // Format Date for better display in chat (e.g. 2026-07-15 -> 15-07-2026)
    let formattedDate = date;
    try {
        const parts = date.split('-');
        if (parts.length === 3) {
            formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
    } catch (e) {
        console.error(e);
    }

    // Format pre-filled WhatsApp message
    let whatsappText = `Hi Glow & Grace Salon, I want to book an appointment slot:\n\n`;
    whatsappText += `👤 Name: ${name}\n`;
    whatsappText += `📞 Phone: ${phone}\n`;
    whatsappText += `💇 Service: ${service}\n`;
    whatsappText += `📅 Date: ${formattedDate}\n`;
    whatsappText += `⏰ Time: ${time}\n`;
    
    if (coupon) {
        whatsappText += `🎟️ Coupon Applied: ${coupon}\n`;
    }
    if (message) {
        whatsappText += `💬 Note: ${message}\n`;
    }
    
    whatsappText += `\nPlease confirm if this slot is available and share final price details.`;

    // Encode text to URI safe characters
    const encodedText = encodeURIComponent(whatsappText);
    
    // Owner phone number (replace with client's actual Indian local business phone)
    const salonOwnerPhone = "919876543210"; 
    
    // Build WhatsApp URL
    const whatsappUrl = `https://wa.me/${salonOwnerPhone}?text=${encodedText}`;

    // Track conversions locally if analytics was requested, then redirect
    showToast('Redirecting to WhatsApp for confirmation...');
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 800);
}
