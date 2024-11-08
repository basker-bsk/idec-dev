"use client";
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
import Link from "next/link";

const formSchema = z.object({
  emailAddress: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
});

export default function ForgotPasswordComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}
  return (
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
  );
}
