import Oidc from "oidc-client";

const settings = {
  authority: "https://localhost:10001/",
  client_id: "Onebill_App",
  redirect_uri: "https://localhost:4200",
  response_type: "code",
  scope: "AdministrationService IdentityService BillingService TenantService",
  post_logout_redirect_uri: "https://localhost:10001/Account/Logout",
};

const userManager = new Oidc.UserManager(settings);

export default userManager;
