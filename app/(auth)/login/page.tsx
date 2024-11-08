import { getClient } from "@/app/utility/ApolloClient";
import { LOGIN_QUERY } from "@/helpers/QueryCollections";
import LoginForm from "./login";

import LoginCMS from "@/components/LoginCms";
export default async function Login() {
  const { data } = await getClient().query({ query: LOGIN_QUERY });
  const cms_login: any =
    data?.landingPageIdecCollection?.items[0]?.lpComponentsCollection?.items[0];
  let sectionStyle = {
    width: "100%",
    background:
      "url(" + cms_login.plbackgroundImage.url + ")  center center black",
    backgroundSize: "cover",
  };

  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 " style={sectionStyle}>
      <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
        <LoginCMS data={cms_login} />
        <LoginForm />
      </div>
    </div>
  );
}
