export const Locators = {
  // Main page locator
  headerTag: 'h3',

  // Sample App page locators
  txtLogin: "[name='UserName']",
  txtPassword: "[name='Password']",
  btnLogin: '#login',
  lblStatus: '#loginstatus',

  // Progress Bar page locators
  btnStart: '#startButton',
  btnStop: '#stopButton',
  progressBar: '#progressBar',
  progressBarValue: 'aria-valuenow',

  // File Upload page locators
  iFrame: 'iframe',
  inputFile: '#browse',
} as const;
