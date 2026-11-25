# MONGODB Question

# 1. WRITE A QUERY TO DISPLAY ALL THE DETAILS FROM THE EMPLOYEE TABLE
---->db.emp.find();
# 2. WAQTD NAME AND COMM ALONG WITH SALARY OF ALL THE EMPLOYEE
---->db.emp.find({},{ename:1,comm:1,sal:1_id:0});
# 3. WAQTD NAME AND SALARY GIVEN TO ALL THE EMPLOYEE
---->db.emp.find({},{ename:1,sal:1,_id:0});
# 4. WAQTD NAME AND COMMISSION GIVEN TO ALL THE EMPLOYEES
---->db.emp.find({},{ename:1,comm:1,_id:0});
# 5. WAQTD EMPPLOYEE ID AND DEPARTMENNT NUMBER OF ALL THE EMPLOYEES IN EMP TABLE
---->db.emp.find({},{empno:1,deptno:1,_id:0});
# 6. WAQTD ENAME AND HIREDATE OF ALL THE EMPLOYEES
---->db.emp.find({},{ename:1,hiredate:1,_id:0});
# 7.WAQTD ENAME AND JOB OF ALL THE EMPLOYEES
---->db.emp.find({},{ename:1,job:1,_id:0});
# 8. WAQTD NAME, JOB AND SALARY GIVEN ALL THE EMPLOYEES
---->db.emp.find({},{ename:1,job:1,sal:1,_id:0});
# 9. WAQTD DNAMES PRESENT IN DEPARTMENT TABLE
---->db.dept.find({},{dname:1,_id:0});
# 10. WAQTD DNAME AND LOCATION PRESENT IN DEPT TABLE 
---->db.dept.find({},{dname:1,loc:1,_id:0});



# ALIAS  QUESTION

# 1. WAQTD employee name, job and annual salary of all employees. Display the calculated field as annual_salary.
--->db.emp.find({},{ename:1,sal:1,job:1,_id:0,annual_salary:{$multiply:["$sal",12]}});

# 2. WAQTD employee number, employee name and half of their salary. Display the calculated field as half_salary.
--->db.emp.find({},{_id:0,empno:1,ename:1,halfyearly_sal:{$divide:["$sal",2]}});

# 3. WAQTD employee name, hiredate and salary after adding an annual bonus of 2000. Display the calculated field as salary_with_bonus.
--->db.emp.find({},{_id:0,ename:1,hiredate:1,salary_with_bonus:{$add:["$sal",2000]}});

# 4. WAQTD employee number, job and salary after a hike of 10%. Display the calculated field as hiked_salary.
--->db.emp.find({},{_id:0,empno:1,job:1,sal:1,hiked_salary:{$add:["$sal",{$multiply:["$sal",0.1]}]}});


# 5.WAQTD employee name, manager ID and salary after a deduction of 25%. Display the calculated field as reduced_salary.
--->db.emp.find({},{_id:0,ename:1,mgr:1,sal:1,reduced_salary:
{$subtract:["$sal",{$multiply:["$sal",0.25]}]}})

# 6.WAQTD employee name, department number and salary after a monthly hike of 50. Display the calculated field as revised_salary.
--->db.emp.find({},{_id:0,ename:1,deptno:1,sal:1,revised_salary:{$add:["$sal",50]}});

# 7.WAQTD employee name, job and annual salary after a deduction of 10%. Display the calculated field as annual_salary_after_deduction.
--->db.emp.find({},{_id:0,ename:1,job:1,annual_salary_after_deduction{$subtract:[{$multiply:["$sal",12]},{$multiply:["$sal",12,0.1]}]}});

Calculation
monthly salary = 800.
- Annual salary = 800 × 12 = 9600
- 10% deduction = 960
- Final annual salary = 9600 − 960 = 8640

# 8. WAQTD employee number, employee name, salary and commission along with their total monthly income (SAL + COMM). Display the calculated field as total_monthly_income.
--->db.emp.find({},{_id:0});



------------------------------------------------------------------------------------------------
# 1. WAQTD THE ANNUAL SALARY OF THE EMPLOYEE WHO NAME IS SMITH
--->db.emp.find({ename:"smith"},{ename:1,sal:1,_id:0,annual_salary:{$multiply:["$sal",12]}});

# 2.
---> db.emp.find({job:"clerk"},{ename:1,job:1,_id:0});

# 3.
--->db.emp.find({job:"salesman"},{sal:1,_id:0});

# 4. 
--->db.emp.find({sal:{$gt:2000}},{_id:0});

# 5.
--->db.emp.find({ename:"jones"},{_id:0});

# 6. 
--->db.emp.find({hiredate:{$gt:new Date("1981-01-01")}},{_id:0});

# 7. WAQTD NAME AND SAL ALONG WITH HIS ANNUAL SALARY IF THE ANNUAL SALARY IS MORE THAN 12000 
 

# 8. 
--->db.emp.find({deptno:30},{_id:0,empno:1});

# 9. 
--->db.emp.find({hiredate:{$lt:ISODate("1981-01-01")}},{_id:0,ename:1,hiredate:1});

# 10.
--->db.emp.find({job:"manager"},{_id:0});

# 11.
--->db.emp.find({comm:1400},{_id:0,ename:1,sal:1});

# 12.
--->

# 13.
--->db.emp.find({hiredate:{$lt:ISODate("1987-01-01")}},{_id:0,empno:1});

# 14.
--->db.emp.find({job:"analyst:},{_id:0,});

# 15.
--->db.emp.find({sal:{$gt:2000}},{_id:0});