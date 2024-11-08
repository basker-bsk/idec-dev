import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ForgotPasswordComponent from "./forgotPassword";
import { getClient } from "@/app/utility/ApolloClient";
import { FORGOT_PASSWORD } from "@/helpers/QueryCollections";
import LoginCMS from "@/components/LoginCms";
export default async function ForgotPassword() {
  const { data } = await getClient().query({ query: FORGOT_PASSWORD });
  const cms_fp: any =
    data?.landingPageIdecCollection?.items[0]?.lpComponentsCollection?.items[0];
  var sectionStyle = {
    width: "100%",
    background:
      "url(" + cms_fp.plbackgroundImage.url + ")  center center black",
    backgroundSize: "cover",
  };

  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 fp" style={sectionStyle}>
      <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
        <LoginCMS data={cms_fp} />

        <ForgotPasswordComponent />
      </div>
    </div>
  );
}
