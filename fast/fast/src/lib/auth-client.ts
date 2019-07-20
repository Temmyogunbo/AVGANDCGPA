import axios from "./axios";

export interface AuthSignupWithoutPasswordParams {
  email: String;
  id: String;
}

export class AuthClient {
  request = (
    method: "post" | "get" | "patch" | "delete",
    slug: string,
    params: Object
  ) => {
    console.log('request', method, slug, params)
    return new Promise(async (resolve, reject) => {
      (axios[method] as Function)(`${slug}`, params)
        .then((response: any) => {
          console.log({ response });
          return resolve(response.data);
        })
        .catch((error: any) => {
          reject(error.response.data);
        });
    });
  }

  signupWithoutPassword = (params: AuthSignupWithoutPasswordParams) => {
    console.log(this)
    return this.request("post", "/users", params);
  }
}

export default new AuthClient();
