if (__DEV__) {
  console.log('Now it\'s development mode')
} else if (__PROD__) {
  console.log('Now it\'s production mode')
}

export default () => console.log('Welcome to use this template!')
