export const addPatientInputs = [
  {
    label: "Full Name",
    id: "fullName",
    type: "text",
    placeholder: "Enter patient's full name",
  },
  {
    label: "Age",
    id: "age",
    type: "number",
    placeholder: "Enter patient's age",
  },
  {
    label: "Sex",
    id: "sex",
    type: "select",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ],
    placeholder: "Select sex",
  },
  {
    label: "Is Diabetic?",
    id: "isDiabetic",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    placeholder: "Select option",
  },
  {
    label: "Family History of Diabetes?",
    id: "familyDiabetic",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    placeholder: "Select option",
  },
  {
    label: "Family History of Stroke?",
    id: "familyStroke",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    placeholder: "Select option",
  },
  {
    label: "Lifestyle Factors",
    id: "lifestyleFactors",
    type: "text",
    placeholder: "e.g., smoking, exercise habits",
  },
];
