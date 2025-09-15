import UIKit
import WebKit

class ViewController: UIViewController {
    
    var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupWebView()
        loadIslamicContent()
    }
    
    func setupWebView() {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []
        
        // Add JavaScript to ensure links work
        let userScript = WKUserScript(
            source: """
                // Ensure all links work properly
                document.addEventListener('DOMContentLoaded', function() {
                    // Override any preventDefault that might be blocking links
                    document.addEventListener('click', function(e) {
                        if (e.target.tagName === 'A' && e.target.href) {
                            // Allow navigation for actual links
                            if (!e.target.href.startsWith('#')) {
                                e.stopPropagation();
                            }
                        }
                    }, true);
                    
                    // Add missing functions that might be called
                    if (typeof goBack === 'undefined') {
                        window.goBack = function() { history.back(); };
                    }
                    if (typeof toggleMobileMenu === 'undefined') {
                        window.toggleMobileMenu = function() {
                            const menu = document.getElementById('mobileMenu');
                            if (menu) menu.classList.toggle('active');
                        };
                    }
                    
                    // Add Hadith search functions if missing
                    if (typeof performHadithSearch === 'undefined') {
                        window.performHadithSearch = function(query) {
                            console.log('Performing hadith search for:', query);
                            // This will be handled by the hadiths.js file
                        };
                    }
                    if (typeof clearHadithSearch === 'undefined') {
                        window.clearHadithSearch = function() {
                            const searchInput = document.getElementById('hadithSearch');
                            const results = document.getElementById('hadithSearchResults');
                            const clearBtn = document.getElementById('clearHadithSearch');
                            if (searchInput) searchInput.value = '';
                            if (results) results.style.display = 'none';
                            if (clearBtn) clearBtn.style.display = 'none';
                        };
                    }
                    
                    // Add missing modal functions
                    if (typeof showContactSheet === 'undefined') {
                        window.showContactSheet = function() {
                            const modal = document.getElementById('contactModal');
                            if (modal) modal.style.display = 'flex';
                        };
                    }
                    if (typeof showDonationBreakdown === 'undefined') {
                        window.showDonationBreakdown = function() {
                            const modal = document.getElementById('donationModal');
                            if (modal) modal.style.display = 'flex';
                        };
                    }
                    if (typeof showDeveloperInfo === 'undefined') {
                        window.showDeveloperInfo = function() {
                            const modal = document.getElementById('developerModal');
                            if (modal) modal.style.display = 'flex';
                        };
                    }
                    if (typeof toggleDropdown === 'undefined') {
                        window.toggleDropdown = function(dropdownId) {
                            const dropdown = document.getElementById(dropdownId);
                            const header = dropdown.previousElementSibling;
                            const chevron = header.querySelector('i');
                            if (dropdown) dropdown.classList.toggle('active');
                            if (chevron) chevron.classList.toggle('active');
                        };
                    }
                });
            """,
            injectionTime: .atDocumentEnd,
            forMainFrameOnly: false
        )
        configuration.userContentController.addUserScript(userScript)
        
        webView = WKWebView(frame: view.bounds, configuration: configuration)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        
        // Enable scrolling
        webView.scrollView.isScrollEnabled = true
        webView.scrollView.bounces = true
        webView.scrollView.alwaysBounceVertical = true
        webView.scrollView.showsVerticalScrollIndicator = true
        webView.scrollView.showsHorizontalScrollIndicator = false
        
        // Allow zooming if needed
        webView.scrollView.minimumZoomScale = 1.0
        webView.scrollView.maximumZoomScale = 3.0
        webView.scrollView.zoomScale = 1.0
        
        view.addSubview(webView)
    }
    
    func loadIslamicContent() {
        if let path = Bundle.main.path(forResource: "index", ofType: "html") {
            let url = URL(fileURLWithPath: path)
            let baseURL = url.deletingLastPathComponent()
            webView.loadFileURL(url, allowingReadAccessTo: baseURL)
        } else {
            // Fallback content
            let fallbackHTML = """
            <!DOCTYPE html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        background: linear-gradient(135deg, #1a4f3a, #2E7D32); 
                        color: white; 
                        text-align: center; 
                        padding: 50px;
                        margin: 0;
                        min-height: 100vh;
                    }
                    h1 { 
                        color: #FFD700; 
                        font-size: 2.5rem;
                        margin-bottom: 2rem;
                    }
                </style>
            </head>
            <body>
                <h1>🕌 Islamic Learning Companion</h1>
                <p>Loading your Islamic content...</p>
            </body>
            </html>
            """
            webView.loadHTMLString(fallbackHTML, baseURL: nil)
        }
    }
}

extension ViewController: WKNavigationDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("✅ Islamic content loaded successfully!")
    }
    
    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("❌ WebView failed: \(error.localizedDescription)")
    }
    
    // Handle navigation decisions to allow links to work
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        if let url = navigationAction.request.url {
            // Allow navigation to local files and same domain
            if url.isFileURL || url.scheme == "file" {
                decisionHandler(.allow)
                return
            }
            
            // Handle external links
            if url.scheme == "http" || url.scheme == "https" {
                // Open external links in Safari
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
                decisionHandler(.cancel)
                return
            }
            
            // Handle internal navigation within the app
            decisionHandler(.allow)
        } else {
            decisionHandler(.cancel)
        }
    }
}