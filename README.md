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