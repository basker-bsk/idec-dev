import { LOGIN_QUERY } from "@/helpers/QueryCollections";
import { getClient } from "@/app/utility/ApolloClient";
export default async function GetLoginCmsData() {
  const { data } = await getClient().query({ query: LOGIN_QUERY });

  const LoginData = data?.footerCollection?.items[0];
  console.log("LoginData", LoginData);

  return LoginData;
}
