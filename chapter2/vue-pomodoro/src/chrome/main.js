chrome.app.runtime.onLaunched.addListener(() => {
  const screenWidth = screen.availWidth;
  const screenHeight = screen.availHeight;
  const width = 500;
  const height = 300;

  chrome.app.window.create('../index.html', {
    id: 'pomodoroVueID',
    outerBounds: {
      width,
      height,
      left: Math.round((screenWidth - width) / 2),
      top: Math.round((screenHeight - height) / 2)
    }
  });
});
