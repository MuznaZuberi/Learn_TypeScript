//  The program shows that you can create modules by implementing separate code files or packages containing the associated functions, classes, and variables. It also illustrates how these modules can be imported and used in the main program, enabling developers to access their functions without duplication of codes. The developers can improve code organization, and readability and facilitate collaboration between team members by grouping codes in modules

import Student_Name from "./first";
console.log(Student_Name);

import { Student_Age, Student_Rollno , Student_Qualification } from "./second";
console.log(Student_Age + " " +  Student_Rollno + " " + Student_Qualification); 
