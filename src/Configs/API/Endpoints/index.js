export default {
  ServerUrl: "127.0.0.1:3000",
  baseUrl: "https://api.experts4u.in",
  login: "/api/v2/Appregister/loginUser",
  register: "/api/v2/account/register/",
  otp: "/api/v2/Appregister/verifyOTP",
  resendotp: "/api/v2/Appregister/resendOTP",
  getParentCatogary: "/api/v2/ParentCategory/Parentcategory",
  getoffers4u: "/api/v2/OffersForYou/offersForYou",
  getHeroSlider: "/api/v2/HeroSlider/GetHeroSlider",
  getBrandweuse: "/api/v2/BrandWeUse/GetBrandWeUse?parentId=",
  getFaqs: "/api/v2/Faqs/GetFaqs?parentId=",
  getVideoShortcut: "/api/v2/VideoShortcut/VGetShortcute",
  getChildCategoryNames: "/api/v2/ChildCategory/NameChildcategory",
  getTestinomial: "/api/v2/Testimonials/GetTestimonials?parentId=",
  getChildCategory: "/api/v2/ChildCategory/GetChildcategory?parentId=",
  getServiceGroup: "/api/v2/ServiceGroup/geterviceGroup",
  getHomeBottom: "/api/v2/HomeBottomBanners/GetHomeBanner",
  getChildCTopBanner: "/api/v2/parentSlider/GetSlider?parentId=",
  getDatabyHeading: "/api/v2/VideoShortcut/GetDataByHeading/",
  getHeadings: "/api/v2/VideoShortcut/GetHeading",
  OtherCharges: "/api/v2/OtherCharges/OtherChargeByPId",
  GetAppointments: "/api/v2/AppoinmentSlot/GetStatusButton",
  getPackagesOrServices: "/api/v2/Service/servicepackagebychild?childId=",
  EditProfile: "/api/v2/Appregister/updateUser/",
  CreateProfile: "/api/v2/Appregister/addData",
  getUserDetails: "/api/v2/Appregister/getUser/",
  AddAddress: "/api/v2/Address/CreateAddress",
  getSavedAddress: "/api/v2/Address/GetAddress?CreatedBy=",
  deleteAddress: "/api/v2/Address/DeleteAddress/",
  SearchServices: "/api/v2/Service/servicepackagebyKeywords?keyword=",
  getTrendingServices: "/api/v2/Tranding/GetTranding",
  getCoverImage: "/api/v2/CoverImage/CoverImage",
  serviceShortcut: "/api/v2/ServiceShortcut/GetShortcute",
  AddJobs: "/api/v2/jobs/AddjobsApp",
  MyBokings: "/api/v2/jobs/getjobs",
  verifyOrder: "/api/v2/jobs/orderVerfy",
  getCoupen: "/api/v2/coupons/getCoupon",
  reshedule: "/api/v2/jobs/update-appointment/",
  cancelBooking: "/api/v2/jobs/cancel-job/",
  getJobById: "/api/v2/jobs/getJobsById/", // + id of job in params
  editAddressEndpoint: "/api/v2/Address/UpdateAddress/",
  getCouponCount: "/api/v2/coupons/CouponCount",
  getPackageDiscount: "/api/v2/PackageDiscount",
  getSectionItems: "/api/v2/VideoShortcut/Headings",
  sendEnquiry: "/api/v2/Inquiry/Inquiry",
  removeCouponOnReshedule: "/api/v2/coupons/couponswithcode/", // + couponCode
  getEnquiryCityList: "/api/v2/EnquiryCity/Enquiry",
  getUpdateStatus: "/api/v2/AppVersion/Version",
  updateJobStatus: "/api/v2/jobs/updatejobstatus/",
};