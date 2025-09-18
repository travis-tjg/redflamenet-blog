'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [urlsList, setUrlsList] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Password for the admin page
  const ADMIN_PASSWORD = 'bingbang2025';

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const processHtmlWithLinks = (htmlContent: string, urlsList: string[]) => {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    let urlIndex = 0;
    
    // Find all <p> elements and process their text content
    const paragraphs = tempDiv.querySelectorAll('p');
    
    paragraphs.forEach(paragraph => {
      // Get the text content of this paragraph
      const textContent = paragraph.textContent || paragraph.innerText || '';
      const originalWords = textContent.split(/(\s+)/); // This preserves whitespace
      
      // Create new content with linked words
      let newContent = '';
      
      for (let i = 0; i < originalWords.length; i++) {
        const segment = originalWords[i];
        
        // If this segment is whitespace, keep it as is
        if (/^\s+$/.test(segment)) {
          newContent += segment;
        } else if (segment.trim() !== '') {
          // This is a word, wrap it in a link if we have URLs left
          if (urlIndex < urlsList.length) {
            newContent += `<a href="${urlsList[urlIndex]}" style="text-decoration: none; color: inherit;">${segment}</a>`;
            urlIndex++;
          } else {
            newContent += segment;
          }
        }
      }
      
      // Replace the paragraph's innerHTML with the new linked content
      paragraph.innerHTML = newContent;
    });
    
    return tempDiv.innerHTML;
  };

  const handleProcessClick = () => {
    setError('');
    
    // Validate inputs
    if (htmlContent.trim() === '') {
      setError('Please enter HTML content.');
      setShowOutput(false);
      return;
    }
    
    if (urlsList.trim() === '') {
      setError('Please enter at least one URL.');
      setShowOutput(false);
      return;
    }
    
    // Parse URLs from textarea (one per line)
    const urls = urlsList.split('\n').map(url => url.trim()).filter(url => url !== '');
    
    if (urls.length === 0) {
      setError('Please enter at least one valid URL.');
      setShowOutput(false);
      return;
    }
    
    // Process the HTML content
    const processedArticle = processHtmlWithLinks(htmlContent, urls);
    
    // Create the HTML output
    const htmlOutput = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Processed Article</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div>
    ${processedArticle}
  </div>
</body>
</html>`;
    
    setOutput(htmlOutput);
    setShowOutput(true);
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = output;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setHtmlContent('');
    setUrlsList('');
    setOutput('');
    setShowOutput(false);
    setError('');
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Access</h1>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main admin interface
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              HTML Article Links Creator
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="htmlContent" className="block text-sm font-medium text-gray-700 mb-2">
                Box 1: HTML Content
              </label>
              <textarea
                id="htmlContent"
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                placeholder="<h2>Your Header</h2>&#10;<p>Your paragraph text here...</p>&#10;<p>Another paragraph...</p>"
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical font-mono text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
            
            <div>
              <label htmlFor="urlsList" className="block text-sm font-medium text-gray-700 mb-2">
                Box 2: URL List (one per line)
              </label>
              <textarea
                id="urlsList"
                value={urlsList}
                onChange={(e) => setUrlsList(e.target.value)}
                placeholder="https://example.com&#10;https://example.org&#10;https://example.net"
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical text-gray-900 placeholder-gray-500"
              />
            </div>
            
            {error && (
              <div className="text-red-600 font-medium">
                {error}
              </div>
            )}
            
            <button
              onClick={handleProcessClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Create my page
            </button>
            
            {showOutput && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="output" className="block text-sm font-medium text-gray-700 mb-2">
                    Box 3: Generated HTML
                  </label>
                  <textarea
                    id="output"
                    value={output}
                    readOnly
                    className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm resize-vertical text-gray-900"
                  />
                  <button
                    onClick={handleCopyClick}
                    className={`mt-2 px-4 py-2 rounded-md transition-colors font-medium ${
                      copySuccess 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {copySuccess ? 'Copied!' : 'Copy HTML'}
                  </button>
                </div>
                
                <div className="mt-8 p-4 border border-gray-300 rounded-md bg-white">
                  <h2 className="text-lg font-semibold mb-4 text-gray-900">Preview:</h2>
                  <div 
                    className="prose max-w-none text-gray-900"
                    style={{ color: '#111827' }}
                    dangerouslySetInnerHTML={{ 
                      __html: processHtmlWithLinks(htmlContent, urlsList.split('\n').map(url => url.trim()).filter(url => url !== ''))
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}