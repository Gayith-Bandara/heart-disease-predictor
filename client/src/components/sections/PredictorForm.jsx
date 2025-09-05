"use client";

import { Label } from "../ui/form-components/Labels";
import { Input } from "../ui/form-components/Input";
import { cn } from "../../lib/utils";
import RadioButton from "../ui/form-components/RadioButton";
import { useState } from 'react';
import Error from "../ui/form-components/Error";
import { scroller } from "react-scroll";
import { submit } from "../../service/PredictorFormService";

const PredictorForm = () => {
  
  const [inputs, setInputs] = useState({
    firstname : "",
    lastname : "",
    email : "",
    bmi : "",
    phealth : "",
    mhealth : "",
    sleep : "",
    smoking : "",
    drinking : "",
    stroke : "",
    diffwalking : "",
    sex : "",
    diabetes : "",
    exercise : "",
    asthma : "",
    kidneydisease : "",
    skincancer : "",
    race : "",
    genhealth : "",
    agecategory : ""
  });
  
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(inputs);
    if(validateForm()){
      const res = await submit(inputs);
      console.log("Success : " + res);
    }
  };

  const scrollToTop = () => {
    scroller.scrollTo("heading", {
      duration: 800,     
      smooth: "easeInOut", 
      offset: -50,       
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    const error = validateField(name, value);
    setErrors(values => ({...values, [name]:error}));
  }

  // This validates fields at input
  const validateField = (name, value) => {
    
    let error = "";
    
    if(name === "firstname" || name === "lastname"){
      if(!/^[A-Za-z]+$/.test(value.trim())){
        error = "*should only contain letters";
      }
    }

    if(name === "email"){
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())){
        error = "*should be in the correct format";
      }
    }

    if(name === "bmi" && value.trim() !== ""){
      const num = Number(value);

      if(isNaN(num)){
        error = "*BMI must be a number";
      }else if( num > 80 || num < 10){
        error = "*please enter a valid BMI"
      }
    }

    if(name === "phealth" || name === "mhealth"){
      const num = Number(value);

      if(isNaN(num)){
        error = "*should be a number";
      }else if( num > 30 || num < 0){
        error = "*should be a number from 0 to 30"
      }
    }

    if(name === "sleep"){
      const num = Number(value);

      if(isNaN(num)){
        error = "*should be a number";
      }else if( num < 1 || num > 16){
        error = "*enter realistic sleep hours"
      }
    }

    if(name === "firstname" || name === "email" || name === "bmi" || name === "phealth" || name === "mhealth" || name === "sleep"){
      if(value.trim() === ""){
        error = "*required";
      }
    }else{
      if(value.trim() === ""){
        error = "";
      }      
    }
    return error;
  }

  // This validates fields at submit
  const validateForm = () => {
    // check for empty fields
    emptyFieldValidation();

    if(checkForErrors()){
      console.log("Errors found");
      console.log(errors);
      scrollToTop();
      return false;
    }else{
      console.log("no errors found");
      return true;
    }
  }

  //sets error messages if the input field is empty
  const emptyFieldValidation = () => {
    for (let name in inputs){
      if(!inputs[name]){
        if(name === "lastname"){
          continue;
        }
        setErrors(values => ({...values, [name]:"*required"}));
      }
    }
  }

  //checks whether there are any pending errors
  const checkForErrors = () => {
    for (let key in errors){
      if(errors[key]){
        console.log(key + errors[key]);
        return true;
      }
    }
    return false;
  }

  return (
    <div className="border border-2 my-10 mx-auto max-w-6xl rounded-none bg-white py-4 md:py-10 px-8 md:px-20 md:rounded-2xl  dark:bg-black border-gray-300 dark:border-gray-600" name="predictorform">
      <h2 className="relative mt-10 z-10 mx-auto max-w-4xl text-center text-xl font-bold text-gray-700 md:text-2xl lg:text-4xl dark:text-white" name="heading">
        Lets Dive In
      </h2>
      <p className="mt-2 pb-10 mx-auto max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Fill out your details as accurately as possible
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div>
            {/* contact information */}            
            <div className="mb-4 py-10 border-y-1 border-gray-300 dark:border-gray-600" >
              <div className="text-start mb-10">
                <h2 className="text-lg/7 font-semibold text-gray-900 dark:text-white">Contact Information</h2>
                <p className="mt-1 text-md/6 text-gray-600 dark:text-neutral-300">Just your name and email so we can stay connected and keep things organized. We promise to keep your info safe and private!</p>
              </div>
      
              <div className="relative grid grid-cols-6 gap-y-4 my-5">
                
                <Label htmlFor="firstname" className="col-span-6 sm:col-span-2" error={errors.firstname} >First name </Label>
                
                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="firstname" placeholder="Tyler" type="text" name="firstname"  value={inputs.firstname || ""} onChange={handleChange}/>
                </div>      

                {errors.firstname && <Error message={errors.firstname}/>} 
              </div>

              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="lastname" className="col-span-6 sm:col-span-2" error={errors.lastname}>Last name (Optional)</Label>

                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="lastname" placeholder="Durden" type="text" name="lastname" value={inputs.lastname || ""} onChange={handleChange}/>
                </div>   

                {errors.lastname && <Error message={errors.lastname}/>}
              </div>

              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="email" className="col-span-6 sm:col-span-2" error={errors.email}>Email Address</Label>

                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="email" placeholder="fillformaccurately@hcare.com" type="email" name="email" value={inputs.email || ""} onChange={handleChange}/>
                </div>

                {errors.email && <Error message={errors.email}/>}                
              </div> 

            </div>

          {/* bio data for predicting */}
          <div className="mb-4 py-10" >

              {/* title and descritpion */}
              <div className="text-start mb-10">
                <h2 className="text-lg/7 font-semibold text-gray-900 dark:text-white">Health Information</h2>
                <p className="mt-1 text-md/6 text-gray-600 dark:text-neutral-300">Please fill out all medical details carefully. <span className="text-rose-600 dark:text-rose-300">All fields are required</span> so we can give you the best prediction!</p>
              </div>

              {/* BMI */}
              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="bmi" className="col-span-6 sm:col-span-2" error={errors.bmi}>Body Mass Index (BMI)</Label>

                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="bmi" placeholder="your BMI" type="text" name="bmi" value={inputs.bmi || ""} onChange={handleChange}/>
                </div> 

                {errors.bmi && <Error message={errors.bmi}/>}                             
              </div>

              {/* Physical Health */}
              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="phealth" error={errors.phealth} className="col-span-6 sm:col-span-2 pr-2 leading-4">Days you felt physically unwell (last 30)</Label>
                
                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="phealth" placeholder="number between 0-30" type="text" name="phealth" value={inputs.phealth || ""} onChange={handleChange}/>
                </div> 

                {errors.phealth && <Error message={errors.phealth}/>}               
              </div>

              {/* Mental Health */}
              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="mhealth" error={errors.mhealth} className="col-span-6 sm:col-span-2 pr-2 leading-4">Days you felt mentally unwell (last 30)</Label>
                
                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="mhealth" placeholder="number between 0-30" type="text" name="mhealth" value={inputs.mhealth || ""} onChange={handleChange}/>
                </div>     

                {errors.mhealth && <Error message={errors.mhealth}/>}    
              </div>

              {/* Sleep */}
              <div className="grid grid-cols-6 gap-y-4 my-5">

                <Label htmlFor="sleep" error={errors.sleep} className="col-span-6 sm:col-span-2 pr-2 leading-4">How many hours do you sleep on average?</Label>

                <div className="col-span-6 sm:col-span-2 sm:col-start-3">
                  <Input id="sleep" placeholder="hours" type="text" name="sleep" value={inputs.sleep || ""} onChange={handleChange}/>
                </div>               

                {errors.sleep && <Error message={errors.sleep}/>} 
              </div>

              {/* Smoker */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="smoking" error={errors.smoking} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Smoke?</Label>              

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Do you currently smoke cigarettes or use tobacco products?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="smoker-yes" name="smoking" value="yes" checked={inputs.smoking === "yes"} onChange={handleChange}/>
                        <Label htmlFor="smoker-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="smoker-no" name="smoking" value="no" checked={inputs.smoking === "no"} onChange={handleChange}/>
                        <Label htmlFor="smoker-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Drinker */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="drinking" error={errors.drinking} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Drink Alcohol?</Label>               

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Do you regularly consume alcoholic drinks?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="drinker-yes" name="drinking" value="yes" checked={inputs.drinking === "yes"} onChange={handleChange}/>
                        <Label htmlFor="drinker-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="drinker-no" name="drinking" value="no" checked={inputs.drinking === "no"} onChange={handleChange}/>
                        <Label htmlFor="drinker-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Stroke */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="stroke" error={errors.stroke} className="col-span-6 sm:col-span-2 pr-2 leading-4">Have You Ever Had a Stroke?</Label>

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Have you ever experienced a stroke or been diagnosed with one by a doctor?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="stroke-yes" name="stroke" value="yes" checked={inputs.stroke === "yes"} onChange={handleChange}/>
                        <Label htmlFor="stroke-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="stroke-no" name="stroke" value="no" checked={inputs.stroke === "no"} onChange={handleChange}/>
                        <Label htmlFor="stroke-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Difficulty Walking */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="diffwalking" error={errors.diffwalking} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Have Difficulty Walking?</Label>              

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Do you have serious difficulty walking or climbing stairs that affects your daily activities?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diffwalking-yes" name="diffwalking" value="yes" checked={inputs.diffwalking === "yes"} onChange={handleChange}/>
                        <Label htmlFor="diffwalking-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diffwalking-no" name="diffwalking" value="no" checked={inputs.diffwalking === "no"} onChange={handleChange}/>
                        <Label htmlFor="diffwalking-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Sex */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="sex" error={errors.sex} className="col-span-6 sm:col-span-2 pr-2 leading-4">Sex Assigned at Birth</Label>               

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Please select your gender.</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3  sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="sex-male" name="sex" value="male" checked={inputs.sex === "male"} onChange={handleChange}/>
                        <Label htmlFor="sex-male"> Male </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div className="col-span-2">
                      <LabelRadioButtonContainer>
                        <RadioButton id="sex-female" name="sex" value="female" checked={inputs.sex === "female"} onChange={handleChange}/>
                        <Label htmlFor="sex-female"> Female </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Diabetes */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="diabetes" error={errors.diabetes} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Have Diabetes?</Label>              

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Have you been diagnosed with diabetes or prediabetes by a healthcare professional?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diabetes-yes" name="diabetes" value="yes" checked={inputs.diabetes === "yes"} onChange={handleChange}/>
                        <Label htmlFor="diabetes-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="diabetes-no" name="diabetes" value="no" checked={inputs.diabetes === "no"} onChange={handleChange}/>
                        <Label htmlFor="diabetes-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Exercise */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="exercise" error={errors.exercise} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Exercise Regularly?</Label>               

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Do you regularly participate in moderate or vigorous physical exercise?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="exercise-yes" name="exercise" value="yes" checked={inputs.exercise === "yes"} onChange={handleChange}/>
                        <Label htmlFor="exercise-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="exercise-no" name="exercise" value="no" checked={inputs.exercise === "no"} onChange={handleChange}/>
                        <Label htmlFor="exercise-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Asthma */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="asthma" error={errors.asthma} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Have Asthma?</Label>

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Have you ever been diagnosed with asthma?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="asthma-yes" name="asthma" value="yes" checked={inputs.asthma === "yes"} onChange={handleChange}/>
                        <Label htmlFor="asthma-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="asthma-no" name="asthma" value="no" checked={inputs.asthma === "no"} onChange={handleChange}/>
                        <Label htmlFor="asthma-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Kidney Disease */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="kidneydisease" error={errors.kidneydisease} className="col-span-6 sm:col-span-2 pr-2 leading-4">Do You Have Kidney Disease?</Label>
              

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Have you been told by a doctor that you have kidney disease?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="kidney-disease-yes" name="kidneydisease" value="yes" checked={inputs.kidneydisease === "yes"} onChange={handleChange}/>
                        <Label htmlFor="kidney-disease-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="kidney-disease-no" name="kidneydisease" value="no" checked={inputs.kidneydisease === "no"} onChange={handleChange}/>
                        <Label htmlFor="kidney-disease-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Skin Cancer */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="skincancer" error={errors.skincancer} className="col-span-6 sm:col-span-2 pr-2 leading-4">Have You Ever Had Skin Cancer?</Label>
                                  

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Have you ever been diagnosed with skin cancer?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="grid grid-cols-6">
                  <div className="grid grid-cols-4 col-span-6 sm:col-start-3 space-y-3 sm:px-2">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="skin-cancer-yes" name="skincancer" value="yes" checked={inputs.skincancer === "yes"} onChange={handleChange}/>
                        <Label htmlFor="skin-cancer-yes"> Yes </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="skin-cancer-no" name="skincancer" value="no" checked={inputs.skincancer === "no"} onChange={handleChange}/>
                        <Label htmlFor="skin-cancer-no"> No </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                                
              </div>

              {/* Race */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="race" error={errors.race} className="col-span-6 sm:col-span-2 pr-2 leading-4">Select Your Race</Label>
                                

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Select the race or ethnicity that you identify with.</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="sm:grid sm:grid-cols-6">
                  <div className="flex flex-wrap space-x-5 space-y-4 sm:flex-none sm:col-start-3 sm:col-span-4">

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="white" name="race" value="white" checked={inputs.race === "white"} onChange={handleChange}/>
                        <Label htmlFor="white"> White </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="black" name="race" value="black" checked={inputs.race === "black"} onChange={handleChange}/>
                        <Label htmlFor="black"> Black </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="asian" name="race" value="asian" checked={inputs.race === "asian"} onChange={handleChange}/>
                        <Label htmlFor="asian"> Asian </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="hispanic" name="race" value="hispanic" checked={inputs.race === "hispanic"} onChange={handleChange}/>
                        <Label htmlFor="hispanic"> Hispanic </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="american-indian" name="race" value="american-indian" checked={inputs.race === "american-indian"} onChange={handleChange}/>
                        <Label htmlFor="american-indian"> American Indian/Alaskan Native </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div>
                      <LabelRadioButtonContainer>
                        <RadioButton id="other" name="race" value="other" checked={inputs.race === "other"} onChange={handleChange}/>
                        <Label htmlFor="other"> Other </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>
                
                                
              </div>

              {/* General Health */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="genhealth" error={errors.genhealth} className="col-span-6 sm:col-span-2 pr-2 leading-4">How Would You Rate Your General Health?</Label>
           

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">How would you rate your overall health, from excellent to poor?</p>
                  </div>
                </div>
                
                {/* radio button options */}
                <div className="sm:grid sm:grid-cols-6">
                  {/* grid sm:grid-cols-6 */}
                  <div className="flex flex-wrap space-x-5 space-y-4 sm:flex-none sm:col-start-3 sm:col-span-4">

                    {/* <div className="col-span-1 sm:col-start-3 space-y-3 px-2">

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="excellent" name="genhealth" value="excellent" checked={inputs.genhealth === "excellent"} onChange={handleChange}/>
                          <Label htmlFor="excellent"> Excellent </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="fair" name="genhealth" value="fair" checked={inputs.genhealth === "fair"} onChange={handleChange}/>
                          <Label htmlFor="fair"> Fair </Label>
                        </LabelRadioButtonContainer>
                      </div>

                    </div> */}

                    {/* <div className="col-span-1 sm:col-start-4 space-y-3 px-2">

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="very-good" name="genhealth" value="very-good" checked={inputs.genhealth === "very-good"} onChange={handleChange}/>
                          <Label htmlFor="very-good"> Very good </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="poor" name="genhealth" value="poor" checked={inputs.genhealth === "poor"} onChange={handleChange}/>
                          <Label htmlFor="poor"> Poor </Label>
                        </LabelRadioButtonContainer>
                      </div>

                    </div> */}

                    {/* <div className="col-span-2 sm:col-start-5 space-y-3 px-2">

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="good" name="genhealth" value="good" checked={inputs.genhealth === "good"} onChange={handleChange}/>
                          <Label htmlFor="good"> Good </Label>
                        </LabelRadioButtonContainer>
                      </div>

                    </div> */}
                    
                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="excellent" name="genhealth" value="excellent" checked={inputs.genhealth === "excellent"} onChange={handleChange}/>
                          <Label htmlFor="excellent"> Excellent </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="very-good" name="genhealth" value="very-good" checked={inputs.genhealth === "very-good"} onChange={handleChange}/>
                          <Label htmlFor="very-good"> Very good </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="good" name="genhealth" value="good" checked={inputs.genhealth === "good"} onChange={handleChange}/>
                          <Label htmlFor="good"> Good </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="fair" name="genhealth" value="fair" checked={inputs.genhealth === "fair"} onChange={handleChange}/>
                          <Label htmlFor="fair"> Fair </Label>
                        </LabelRadioButtonContainer>
                      </div>

                      <div>
                        <LabelRadioButtonContainer>
                          <RadioButton id="poor" name="genhealth" value="poor" checked={inputs.genhealth === "poor"} onChange={handleChange}/>
                          <Label htmlFor="poor"> Poor </Label>
                        </LabelRadioButtonContainer>
                      </div>

                  </div>
                </div>
                
                                
              </div>

              {/* Age Category */}
              <div className="flex flex-col my-5">
                
                {/* title and desicription */}
                <div className="grid grid-cols-6 my-5">
                  <Label htmlFor="agecategory" error={errors.agecategory} className="col-span-6 sm:col-span-2 pr-2 leading-4">Select your age group</Label>
                                  

                  <div className="col-span-6 sm:col-span-4">
                    <p className="mt-1 text-start text-sm/6 text-gray-600 dark:text-neutral-300">Choose the age group that best describes your current age.</p>
                  </div>
                </div>
                
                <div className="sm:grid sm:grid-cols-6">
                  {/* radio button options */}
                  <div className="flex flex-wrap space-x-5 space-y-4 sm:flex-none sm:col-start-3 sm:col-span-4">

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="18-24" name="agecategory" value="18-24" checked={inputs.agecategory === "18-24"} onChange={handleChange}/>
                        <Label htmlFor="18-24"> 18-24 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="25-29" name="agecategory" value="25-29" checked={inputs.agecategory === "25-29"} onChange={handleChange}/>
                        <Label htmlFor="25-29"> 25-29 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="30-34" name="agecategory" value="30-34" checked={inputs.agecategory === "30-34"} onChange={handleChange}/>
                        <Label htmlFor="30-34"> 30-34 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="35-39" name="agecategory" value="35-39" checked={inputs.agecategory === "35-39"} onChange={handleChange}/>
                        <Label htmlFor="35-39"> 35-39 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="40-44" name="agecategory" value="40-44" checked={inputs.agecategory === "40-44"} onChange={handleChange}/>
                        <Label htmlFor="40-44"> 40-44 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="45-49" name="agecategory" value="45-49" checked={inputs.agecategory === "45-49"} onChange={handleChange}/>
                        <Label htmlFor="45-49"> 45-49 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="50-54" name="agecategory" value="50-54" checked={inputs.agecategory === "50-54"} onChange={handleChange}/>
                        <Label htmlFor="50-54"> 50-54 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    
                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="55-59" name="agecategory" value="55-59" checked={inputs.agecategory === "55-59"} onChange={handleChange}/>
                        <Label htmlFor="55-59"> 55-59 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="60-64" name="agecategory" value="60-64" checked={inputs.agecategory === "60-64"} onChange={handleChange}/>
                        <Label htmlFor="60-64"> 60-64 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="65-69" name="agecategory" value="65-69" checked={inputs.agecategory === "65-69"} onChange={handleChange}/>
                        <Label htmlFor="65-69"> 65-69 </Label>
                      </LabelRadioButtonContainer>
                    </div>
                    
                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="70-74" name="agecategory" value="70-74" checked={inputs.agecategory === "70-74"} onChange={handleChange}/>
                        <Label htmlFor="70-74"> 70-74 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="75-79" name="agecategory" value="75-79" checked={inputs.agecategory === "75-79"} onChange={handleChange}/>
                        <Label htmlFor="75-79"> 75-79 </Label>
                      </LabelRadioButtonContainer>
                    </div>

                    <div >
                      <LabelRadioButtonContainer>
                        <RadioButton id="80 or older" name="agecategory" value="80 or older" checked={inputs.agecategory === "80 or older"} onChange={handleChange}/>
                        <Label htmlFor="80 or older"> 80 or older </Label>
                      </LabelRadioButtonContainer>
                    </div>

                  </div>
                </div>                               
              </div>
            </div>
        </div>

        <button
          className=" hover:cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Do I have heart disease ??? &rarr;
          <BottomGradient />
        </button>


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
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      {/* <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" /> */}
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
