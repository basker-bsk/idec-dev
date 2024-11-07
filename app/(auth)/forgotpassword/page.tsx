"use client";
import data from "@/public/assets/data/forgot-password.json";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TLogin } from "@/interface";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  emailAddress: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
});
export default function ForgotPassword() {
  const fpcontent = data.data;
  const cms_fp: any =
    fpcontent?.landingPageIdecCollection?.items[0]?.lpComponentsCollection
      ?.items[0];
  var sectionStyle = {
    width: "100%",
    background:
      "url(" + cms_fp.plbackgroundImage.url + ")  center center black",
    backgroundSize: "cover",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 fp" style={sectionStyle}>
      <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
        <div className="flex flex-col justify-between text-white w-full md:w-1/2 pt-12 md:pt-0 mt-12 md:mt-0 border-t-2 border-gray-100 md:border-t-0 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="flex font-medium">{cms_fp.plHeading}</h3>
            <div className="text-14 leading-14 rta">
              {documentToReactComponents(cms_fp?.plintroText?.json)}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-14 leading-14 rta">
              {documentToReactComponents(cms_fp?.plDescription?.json)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-5 lg:p-8 flex flex-col w-full md:w-1/2 md:min-h-[400px]">
          <div className="flex flex-col text-black ">
            <p className="text-18 leading-18 md:text-24 md:leading-24 pb-4 md:pb-2 font-medium">
              Forgot Password?
            </p>
            <p className="font-medium md:font-normal text-14 leading-14 md:text-16 md:leading-16 ">
              Enter the email associated with your account and we will email you
              instructions to reset your password.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-full my-12"
              >
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Email Here"
                          type="email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-12">
                  <Button type="submit" className="w-full">
                    Confirm
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <p className="text-center  text-14 leading-14 ">
            <Link href="/login" className="font-medium underline">
              Return logging in?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
