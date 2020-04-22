chrome.app.runtime.onLaunched.addListener(function () {
  // Center the window on the screen
  const screenWidth = screen.availWidth;
  const screenHeight = screen.availHeight;
  const width = 500;
  const height = 300;

  chrome.app.window.create('index.html', {
    id: 'learningVueID',
    outerBounds: {
      width,
      height,
      left: Math.round((screenWidth - width) / 2),
      right: Math.round((screenHeight - height) / 2)
    }
  });
});
