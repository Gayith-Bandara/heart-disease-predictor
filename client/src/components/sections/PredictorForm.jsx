"use client";

import { Label } from "../ui/form-components/Labels";
import { Input } from "../ui/form-components/Input";
import { cn } from "../../lib/utils";
import Divider from "../ui/form-components/Divider"
import RadioButton from "../ui/form-components/RadioButton";
import { div } from "motion/react-client";

const PredictorForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="border border-2 my-10 mx-auto max-w-6xl rounded-none bg-white py-4 md:py-10 px-8 md:px-20 md:rounded-2xl  dark:bg-black border-gray-300 dark:border-gray-600">
      <h2 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold text-gray-700 md:text-2xl lg:text-4xl dark:text-white">
        Welcome to HCare
      </h2>
      <p className="mt-2 pb-10 mx-auto max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill out your details as accurately as possible
      </p>
      <form className="my-8" onSubmit={handleSubmit}>

        <div>

            {/* contact information */}            
            <div className="mb-4 py-10 border-y-1 border-gray-300 dark:border-gray-600" >
              <div className="text-start mb-5">
                <h2 className="text-lg/7 font-semibold text-gray-900 dark:text-white">Contact Information</h2>
                <p className="mt-1 text-sm/6 text-gray-600 dark:text-neutral-300">Just your name and email so we can stay connected and keep things organized. We promise to keep your info safe and private!</p>
              </div>
      
              <div className="grid grid-cols-6 my-1">
                <Label htmlFor="firstname" className="my-auto mr-auto">First name</Label>
                <div className="col-span-2 col-start-3">
                  <Input id="firstname" placeholder="Tyler" type="text"/>
                </div>                
              </div>

              <div className="grid grid-cols-6 my-1">
                <Label htmlFor="firstname" className="my-auto mr-auto">Last name</Label>
                <div className="col-span-2 col-start-3">
                  <Input id="firstname" placeholder="Durden" type="text"/>
                </div>                
              </div>

              <div className="grid grid-cols-6 my-1">
                <Label htmlFor="firstname" className="my-auto mr-auto">Email Address</Label>
                <div className="col-span-3 col-start-3">
                  <Input id="firstname" placeholder="projectmayhem@fc.com" type="email"/>
                </div>                
              </div> 

            </div>

          {/* bio data for predicting */}
          <div className="mb-4 py-10 border-b-1 border-gray-300 dark:border-gray-600" >

              {/* title and descritpion */}
              <div className="text-start mb-5">
                <h2 className="text-lg/7 font-semibold text-gray-900 dark:text-white">Health Information</h2>
                <p className="mt-1 text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
              </div>

              {/* BMI */}
              <div className="grid grid-cols-6 my-5">
                <Label htmlFor="bmi" className="my-auto mr-auto">Body Mass Index (BMI)</Label>
                <div className="col-span-2 col-start-3">
                  <Input id="bmi" placeholder="BMI" type="number"/>
                </div>                
              </div>

              {/* Smoker */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Smoke?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="smoker-yes" name="smoker"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="smoker-no" name="smoker"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Drinker */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Drink Alcohol?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="drinker-yes" name="drinker"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="drinker-no" name="drinker"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Stroke */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Have You Ever Had a Stroke?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="stroke-yes" name="stroke"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="stroke-no" name="stroke"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Difficulty Walking */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Have Difficulty Walking?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diffwalking-yes" name="diffwalking"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diffwalking-no" name="diffwalking"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Sex */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Sex Assigned at Birth</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="sex-male" name="sex"/>
                        <Label htmlFor="male"> Male </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="sex-female" name="sex"/>
                        <Label htmlFor="female"> Female </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Diabetes */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Have Diabetes?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diabetes-yes" name="diabetes"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diabetes-no" name="diabetes"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Exercise */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Exercise Regularly?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="exercise-yes" name="exercise"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="exercise-no" name="exercise"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Asthma */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Have Asthma?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="asthma-yes" name="asthma"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="asthma-no" name="asthma"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Kidney Disease */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Do You Have Kidney Disease?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="kidney-disease-yes" name="kidney-disease"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="kidney-disease-no" name="kidney-disease"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Skin Cancer */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <div className="text-start">
                    <Label htmlFor="firstname" className="my-auto mr-auto">Have You Ever Had Skin Cancer?</Label>
                  </div>                

                  <div className="col-span-4 col-start-3">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please fill out all the medical details carefully — the more accurate your info, the better our prediction can be!</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="col-span-4 col-start-3 space-y-3 px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="skin-cancer-yes" name="skin-cancer"/>
                        <Label htmlFor="yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="skin-cancer-no" name="skin-cancer"/>
                        <Label htmlFor="no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

            </div>
        </div>
        

        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Days Did You Feel Physically Unwell in the Past 30 Days?</Label>
          <Input id="twitterpassword" placeholder="1-30" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Days Did You Feel Mentally Unwell in the Past 30 Days?</Label>
          <Input id="twitterpassword" placeholder="1-30" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Select Your Age Group</Label>
          <Input id="twitterpassword" placeholder="10 groups" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Select Your Race</Label>
          <Input id="twitterpassword" placeholder="4 groups" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Would You Rate Your General Health?</Label>
          <Input id="twitterpassword" placeholder="5 groups" type="twitterpassword" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">How Many Hours Do You Sleep on Average?</Label>
          <Input id="twitterpassword" placeholder="1-16" type="twitterpassword" />
        </LabelInputContainer>


        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Do I have heart disease ??? &rarr;
          <BottomGradient />
        </button>

        <Divider/>

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
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-row space-y-2 my-8", className)}>
      {children}
    </div>
  );
};

const LabelRadioButtonContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex space-between gap-x-3", className)}>
      {children}
    </div>
  );
}


export default PredictorForm;
