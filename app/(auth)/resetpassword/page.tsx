"use client";
import classnames from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z
  .object({
    password: z.string().min(1, {
      message: "Password is required",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must be same",
    path: ["confirmPassword"],
  });
export default function ResetPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
    <div className="flex px-4 py-8 md:py-10 xl:py-20 fp ">
      <div className="mx-auto flex w-full sm:w-[442px] ">
        <div className="bg-white rounded-md p-5 lg:p-7 flex flex-col   md:min-h-[400px]">
          <div className="flex flex-col text-black ">
            <p className="text-18 leading-18 md:text-24 md:leading-24 pb-4 md:pb-2 font-medium">
              Reset Password
            </p>
            <p className="font-medium md:font-normal text-14 leading-14 md:text-16 md:leading-16 ">
              Enter your new password below to change your password.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-full mt-8"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Create Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Thisisanexamplepassword"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                      <FormDescription className="mt-3 flex flex-col gap-3">
                        <p className="flex gap-3 items-center">
                          <span
                            className={classnames(
                              "icon-tick font-bold  text-12 flex justify-center items-center rounded-full w-6 h-6 bg-gray-300",
                              {}
                            )}
                          ></span>
                          <span className={classnames("font-medium", {})}>
                            Must be at least 8 characters
                          </span>
                        </p>
                        <p className="flex gap-3 items-center">
                          <span
                            className={classnames(
                              "icon-tick font-bold  text-12 flex justify-center items-center rounded-full w-6 h-6 bg-gray-300",
                              {}
                            )}
                          ></span>
                          <span className={classnames("font-medium", {})}>
                            Must contain one special character.
                          </span>
                        </p>
                      </FormDescription>
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
                <div className="mt-12">
                  <Button type="submit" className="w-full">
                    Reset Password
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
