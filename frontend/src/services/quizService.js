import httpService from './httpService';


export const quizService = {
    query,
    getById,
  }
  
  function query(filterBy = {}) {
    let queryStr = '?';
    for (const key in filterBy) {
      queryStr += `${key}=${filterBy[key]}&`;
    }
    return httpService.get(`quiz${queryStr || ''}`);
  }
  
  // function query() {
  //   return httpService.get(`quiz`);
  // }
  
  function getById(quizId) {
    return httpService.get(`quiz/${quizId}`)
  }
  