import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ResetPasswordSuccess() {
  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 fp ">
      <div className="mx-auto flex w-full sm:w-[442px] ">
        <div className="bg-white rounded-md p-5 lg:p-7 flex flex-col   md:min-h-[200px]">
          <div className="flex flex-col text-black ">
            <p className="text-18 leading-18 md:text-24 md:leading-24 pb-4 md:pb-2 font-medium">
              Password Reset Successful!
            </p>
            <p className="font-medium md:font-normal text-14 leading-14 md:text-16 md:leading-16 ">
              You have successfully reset your password. You may login to your
              account with your new password now.
            </p>
            <div className="mt-12">
              <Link href="/login">
                <Button type="submit" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
