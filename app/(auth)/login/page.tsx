"use client";
import data from "@/public/assets/data/login.json";
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

const formSchema = z
  .object({
    emailAddress: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email(),
    password: z.string().min(1, {
      message: "Password is required",
    }),
    remember: z.boolean().default(false),
  })

  .refine((data) => data.remember === true, {
    message: "Accept is Required",
    path: ["remember"],
  });
export default function Login() {
  const logincontent = data.data;
  const cms_login: any =
    logincontent?.landingPageIdecCollection?.items[0]?.lpComponentsCollection
      ?.items[0];
  var sectionStyle = {
    width: "100%",
    backgroundImage: "url(" + cms_login.plbackgroundImage.url + ")",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      remember: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 " style={sectionStyle}>
      <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
        <div className="flex flex-col justify-between text-white w-full md:w-1/2 pt-12 md:pt-0 mt-12 md:mt-0 border-t-2 border-gray-100 md:border-t-0">
          <h3 className="hidden md:flex font-medium">{cms_login.plHeading}</h3>
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4">
              {cms_login.plFeatures.map((feature: any) => (
                <li
                  className="text-14 leading-14 font-bold flex gap-2 items-center"
                  key={feature.id}
                >
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-success text-black text-10 font-bold icon-tick"></span>
                  <span>{feature.key}</span>
                </li>
              ))}
            </ul>
            <div className="text-14 leading-14 ">
              {documentToReactComponents(cms_login?.plDescription?.json)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md p-5 lg:p-8 flex flex-col w-full md:w-1/2 md:min-h-[400px]">
          <div className="flex flex-col text-black ">
            <p className="text-18 leading-18 md:text-24 md:leading-24 pb-4 md:pb-2 font-medium">
              Login to IDEC Japan
            </p>
            <p className="font-medium md:font-normal text-14 leading-14 md:text-16 md:leading-16 pb-10 md:pb-8">
              Don’t have an account?
              <Link href="/signup" className="text-primary underline pl-1">
                Sign Up
              </Link>
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Password Here"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="remember"
                    render={({ field }) => (
                      <FormItem className="">
                        <div className="flex gap-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="">
                            <FormLabel className="text-14 leading-14 font-medium">
                              Remember Me
                            </FormLabel>
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Link href="/" className="underline text-14">
                    Forgot Password?
                  </Link>
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Form>
          </div>
          <p className="text-center md:text-left text-14 leading-14 mt-6 md:mt-4">
            Having trouble logging in?{" "}
            <Link href="/" className="font-medium underline">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
