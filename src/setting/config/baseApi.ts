
export default
process.env.NODE_ENV === 'development'
  ? {
    baseURL: 'https://jsonplaceholder.typicode.com'
  }
  : {
    baseURL: `https://jsonplaceholder.typicode.com`,
  }
