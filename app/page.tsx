import Image from "next/image";
import axios from "axios";


async function getUserDetails() {
  await new Promise((r) => setTimeout(r,5000))
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

//async component only in server component
export default async function Home() {

  const userDetails = await getUserDetails();
  return (
    <div className="">
      root route
      {userDetails.email}
      {userDetails.name}
    </div>
  );
}
