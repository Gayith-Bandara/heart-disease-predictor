"use client";

import { Label } from "../ui/Labels";
import { Input } from "../ui/Input";
import { cn } from "../../lib/utils";

const PredictorForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="shadow-input mx-auto w-full max-w-7xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to HCare
      </h2>
      <p className="mt-2 mx-auto max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill out your details as accurately as possible
      </p>
      <form className="my-8" onSubmit={handleSubmit}>

        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Body Mass Index (BMI)</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Smoke?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Drink Alcohol?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Have You Ever Had a Stroke?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Days Did You Feel Physically Unwell in the Past 30 Days?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Days Did You Feel Mentally Unwell in the Past 30 Days?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Have Difficulty Walking?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Sex Assigned at Birth</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Select Your Age Group</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Select Your Race</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Have Diabetes?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Exercise Regularly?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Would You Rate Your General Health?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Hours Do You Sleep on Average?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Have Asthma?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Do You Have Kidney Disease?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Have You Ever Had Skin Cancer?</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Do I Have Heart Disease??? &rarr;
          <BottomGradient />
        </button>

        <div
          className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        {/* <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit">
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit">
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default PredictorForm;
