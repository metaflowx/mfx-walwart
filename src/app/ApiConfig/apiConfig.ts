export const baseURL = "http://192.168.1.17:8000/api/v1"; 
// export const baseURL = "https://mfx.ramabridge.com/api/v1"; 





const apiConfig = {
  // auth //////////////////////

  signup: `${baseURL}/user/signup`,
  login: `${baseURL}/user/login`,
  me: `${baseURL}/user/me`,
  updatePassword: `${baseURL}/user/updatePassword`,
  userList: `${baseURL}/user/list`,
  changeUserStatus: `${baseURL}/user/changeUserStatus`,

  // admin

  profile: `${baseURL}/admin/profile`,
  update: `${baseURL}/admin/update`,

  //referral 


  ReferralListHistory: `${baseURL}/referral/ReferralListHistory`,
  disableReferral: `${baseURL}/referral/disableReferral`,
  // pacakage
  all: `${baseURL}/pacakage/all`,
  buyPacakgePlan: `${baseURL}/pacakage/buyPacakgePlan`,
  getActivePlan: `${baseURL}/investment/getActivePlan`,
  task: `${baseURL}/task`,
  review: `${baseURL}/task/review`,

  //admin task

  createTask: `${baseURL}/task/create`,
  edit: `${baseURL}/task/edit`,
  delete: `${baseURL}/task/delete`,
  uploadImage: `${baseURL}/task/uploadImage`,
//admin package
  
  addPacakage: `${baseURL}/pacakage/add`,
  editPacakage: `${baseURL}/pacakage/edit`,
  deletePacakage: `${baseURL}/pacakage/delete`,
  allPacakage: `${baseURL}/pacakage/all`,

  dashboard: `${baseURL}/dashboard`,



  





  

  

  






  
  


 
};

export default apiConfig;
