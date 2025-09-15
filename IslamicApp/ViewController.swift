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
        
        webView = WKWebView(frame: view.bounds, configuration: configuration)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        
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
}