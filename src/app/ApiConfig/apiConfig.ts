// export const baseURL = "http://192.168.1.17:8000/api/v1"; 
export const baseURL = "https://api.walmartchain.com/api/v1"; 





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
  Referralstats: `${baseURL}/referral/stats`,
  getReferralUsersByLevel: `${baseURL}/referral/getReferralUsersByLevel`,
  getFreezeAmount: `${baseURL}/referral/getFreezeAmount`,


  

  // pacakage
  all: `${baseURL}/pacakage/all`,
  buyPacakgePlan: `${baseURL}/pacakage/buyPacakgePlan`,
  getActivePlan: `${baseURL}/investment/getActivePlan`,
  task: `${baseURL}/task`,
  review: `${baseURL}/task/review`,
  progress: `${baseURL}/task/progress`,


 

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

  //admin assets
  addAssets: `${baseURL}/assets/add`,
  editAssets: `${baseURL}/assets/edit`,
  deleteAssets: `${baseURL}/assets/delete`,
  listAssets: `${baseURL}/assets/list`,
  assetsById: `${baseURL}/assets`,

  walletUpdate: `${baseURL}/wallet/update`,


  // user wallet

  walletdetail: `${baseURL}/wallet/detail`,
  balance: `${baseURL}/wallet/balance`,
  balances: `${baseURL}/wallet/balances`,


  // user transaction
  deposit: `${baseURL}/transaction/deposit`,
  confirmed: `${baseURL}/transaction/deposit/confirmed`,
  withdraw: `${baseURL}/transaction/withdraw`,
  allHistory: `${baseURL}/transaction/all`,
  transactionById: `${baseURL}/transaction`,





  


  


  



  





  

  

  






  
  


 
};

export default apiConfig;
