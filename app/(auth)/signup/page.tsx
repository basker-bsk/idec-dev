"use client";

import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import data from "@/public/assets/data/register.json";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TLogin } from "@/interface";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";
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
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z
  .object({
    firstName: z.string().min(5, {
      message: "Name must be atleast 5 characters",
    }),
    lastName: z.string().min(1, {
      message: "Name must be atleast 1 characters",
    }),
    emailAddress: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email(),
    phone: z
      .string()
      .min(10, {
        message: "Phone number must be atleast 10 digits",
      })
      .regex(phoneRegex, "Invalid Number!"),
    country: z.string().min(1, { message: "Country is required" }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
    confirmPassword: z.string(),
    subscribe: z.boolean().default(false),
    tc: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must be same",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const registercontent = data.data;
  const cms_register: any =
    registercontent?.landingPageIdecCollection?.items[0]?.lpComponentsCollection
      ?.items[0];
  var sectionStyle = {
    width: "100%",
    backgroundImage: "url(" + cms_register.plbackgroundImage.url + ")",
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      country: "",
      password: "",
      confirmPassword: "",
      subscribe: false,
      tc: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <>
      <div className="flex px-4 py-8 md:py-10 xl:py-20 " style={sectionStyle}>
        <div className="max-w-[1120px] mx-auto flex flex-col-reverse md:flex-row md:gap-[50px] xl:gap-[100px]">
          <div className="flex flex-col md:h-1/2 justify-between text-white w-full md:w-1/2 pt-12 md:pt-0 mt-12 md:mt-0 border-t-2 border-gray-100 md:border-t-0">
            <h3 className="hidden md:flex font-medium">
              {cms_register.plHeading}
            </h3>
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-4">
                {cms_register.plFeatures.map((feature: any) => (
                  <li className=" flex gap-2 items-start" key={feature.id}>
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-success text-black text-10 font-bold icon-tick"></span>
                    <div className="flex flex-col">
                      <p className="text-14 leading-14 font-bold">
                        {feature.key}
                      </p>
                      <span className="text-14 leading-14">
                        {feature.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-14 leading-14 ">
                {documentToReactComponents(cms_register?.plDescription?.json)}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 lg:p-8 flex flex-col w-full md:w-1/2 md:min-h-[400px]">
            <div className="flex flex-col text-black ">
              <p className="text-18 leading-18 md:text-24 md:leading-24 pb-4 md:pb-2 font-medium">
                Create an IDEC account
              </p>
              <p className="font-medium md:font-normal text-14 leading-14 md:text-16 md:leading-16 pb-10 md:pb-8">
                Already have an account?
                <Link href="/login" className="text-primary underline pl-1">
                  Login
                </Link>
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" w-full"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter First Name Here"
                            type="text"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Last Name Here"
                            type="text"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Phone Number Here"
                            type="text"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="" {...field}>
                              <SelectValue placeholder="Select where you are from" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="apple">America</SelectItem>
                                <SelectItem value="banana">China</SelectItem>
                                <SelectItem value="blueberry">India</SelectItem>
                                <SelectItem value="grapes">Japan</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
                        <FormLabel>Create Password</FormLabel>
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
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Re-enter your password"
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
                      name="subscribe"
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
                              <FormLabel className="text-12 leading-12 md:text-14 md:leading-14 font-normal">
                                Subscribe me to IDEC newsletter
                              </FormLabel>
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-between">
                    <FormField
                      control={form.control}
                      name="tc"
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
                              <FormLabel className="text-12 leading-12 md:text-14 md:leading-14 font-normal">
                                I agree to IDEC’s Terms and Conditions & Privacy
                                Policy
                              </FormLabel>
                            </div>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mb-10 md:mb-8">
                    <ReCAPTCHA
                      sitekey={"6Lf1C2AiAAAAABwCT7jttDwrDEhKpoGS4vOrOnR-"}
                      ref={recaptchaRef}
                      onChange={handleChange}
                      onExpired={handleExpired}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </Form>
            </div>
            <p className="text-center md:text-left text-14 leading-14 mt-6 md:mt-4">
              Having trouble signing up?{" "}
              <Link href="/" className="font-medium underline">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
