export const baseURL = "http://192.168.1.17:8000/api/v1"; //mine


const apiConfig = {
  // auth //////////////////////

  signup: `${baseURL}/user/signup`,
  login: `${baseURL}/user/login`,
  me: `${baseURL}/user/me`,
  updatePassword: `${baseURL}/user/updatePassword`,


  

  // pacakage
  all: `${baseURL}/pacakage/all`,
  buyPacakgePlan: `${baseURL}/pacakage/buyPacakgePlan`,
  getActivePlan: `${baseURL}/investment/getActivePlan`,
  task: `${baseURL}/task`,
  review: `${baseURL}/task/review`,






  
  


 
};

export default apiConfig;
