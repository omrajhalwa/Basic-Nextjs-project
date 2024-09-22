import Image from "next/image";
import axios from "axios";


async function getUserDetails() {
  await new Promise((r) => setTimeout(r,5000))
  const response = await axios.get("http://localhost:3000/api/user/")
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
