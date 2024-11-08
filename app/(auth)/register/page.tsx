import LoginCMS from "@/components/LoginCms";
import RegisterForm from "./register";
import { getClient } from "@/app/utility/ApolloClient";
import { REGISTER_QUERY } from "@/helpers/QueryCollections";
export default async function Signup() {
  const { data } = await getClient().query({ query: REGISTER_QUERY });
  const cms_register: any =
    data?.landingPageIdecCollection?.items[0]?.lpComponentsCollection?.items[0];
  let sectionStyle = {
    width: "100%",
    background:
      "url(" + cms_register.plbackgroundImage.url + ")  center center black",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex px-4 py-8 md:py-10 xl:py-20 " style={sectionStyle}>
        <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
          <LoginCMS data={cms_register} />
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
