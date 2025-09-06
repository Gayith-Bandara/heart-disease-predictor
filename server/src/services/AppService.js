
export const parseRequest = async (data) => {
  const userData = {
    'firstName': data?.firstname || "",
    'lastName': data?.lastname || "",
    'email': data?.email || ""
  };

  const healthData = {
    'bmi': data?.bmi || "",
    'phealth': data?.phealth || "",
    'mhealth': data?.mhealth || "",
    'sleep': data?.sleep || "",
    'smoking': data?.smoking || "",
    'drinking': data?.drinking || "",
    'stroke': data?.stroke || "",
    'diffwalking': data?.diffwalking || "",
    'sex': data?.sex || "",
    'diabetes': data?.diabetes || "",
    'exercise': data?.exercise || "",
    'asthma': data?.asthma || "",
    'kidneydisease': data?.kidneydisease || "",
    'skincancer': data?.skincancer || "",
    'race': data?.race || "",
    'genhealth': data?.genhealth || "",
    'agecategory': data?.agecategory || ""
  };

  const formattedHealthData = await formatHealthData(healthData);
  return { userData, formattedHealthData};
};

const formatHealthData = async (healthData) => {
  let bmi = Number(healthData.bmi);
  let phealth = Number(healthData.phealth);
  let mhealth = Number(healthData.mhealth);
  let sleep = Number(healthData.sleep);
  let smoking = healthData.smoking === 'yes' ? 1 : 0;
  let drinking = healthData.drinking === 'yes' ? 1 : 0;
  let stroke = healthData.stroke === 'yes' ? 1 : 0;
  let diffwalking = healthData.diffwalking === 'yes' ? 1 : 0;
  let sex = healthData.sex === 'male' ? 1 : 0;
  let exercise = healthData.exercise === 'yes' ? 1 : 0;
  let asthma = healthData.asthma === 'yes' ? 1 : 0;
  let kidneydisease = healthData.kidneydisease === 'yes' ? 1 : 0;
  let skincancer = healthData.skincancer === 'yes' ? 1 : 0;
  let race = healthData.race;
  let diabetes = healthData.diabetes;
  let genhealth = healthData.genhealth;
  let agecategory = healthData.agecategory;

  switch (race){
    case "white":
      race = 1;
      break;
    case "black":
      race = 2;
      break;
    case "asian":
      race = 3;
      break;
    case "hispanic":
      race = 5;
      break;
    case "american-indian":
      race = 4;
      break;
    case "other":
      race = 0;
      break;
    default:
      race = 0;
      console.log("Error: default called in race");
  }

  switch (diabetes) {
    case "yes":
      diabetes = 1;
      break;
    case "no":
      diabetes = 2;
      break;
    case "no, borderline diabetes":
      diabetes = 3;
      break;
    case "yes (during pregnancy)":
      diabetes = 0;
      break;
    default:
      diabetes = 0;
      console.log("Error: default called in diabetes");
  }

  switch (genhealth){
    case "excellent":
      genhealth = 0;
      break;
    case "very-good":
      genhealth = 1;
      break;
    case "good":
      genhealth = 2;
      break;
    case "fair":
      genhealth = 3;
      break;
    case "poor":
      genhealth = 4;
      break;
    default:
      genhealth = 0
      console.log("Error default called in genHealth");
      break;
  }

  switch (agecategory){
    case "18-24":
      agecategory = 0;
      break;
    case "25-29":
      agecategory = 1;
      break;
    case "30-34":
      agecategory = 2;
      break;
    case "35-39":
      agecategory = 3;
      break;
    case "40-44":
      agecategory = 4;
      break;
    case "45-49":
      agecategory = 5;
      break;
    case "50-54":
      agecategory = 6;
      break;
    case "55-59":
      agecategory = 7;
      break;
    case "60-64":
      agecategory = 8;
      break;
    case "65-69":
      agecategory = 9;
      break;
    case "70-74":
      agecategory = 10;
      break;
    case "75-79":
      agecategory = 11;
      break;
    case "80 or older":
      agecategory = 12;
      break;
    default:
      agecategory = 
      console.log("Error default called in agecategory");
      break;
  }

  const result = {
    'bmi': bmi,
    'phealth': phealth,
    'mhealth': mhealth,
    'sleep': sleep,
    'smoking': smoking,
    'drinking': drinking,
    'stroke': stroke,
    'diffwalking': diffwalking,
    'sex': sex,
    'diabetes': diabetes,
    'exercise': exercise,
    'asthma': asthma,
    'kidneydisease': kidneydisease,
    'skincancer': skincancer,
    'race': race,
    'genhealth': genhealth,
    'agecategory': agecategory
  };
 
  return result;
}