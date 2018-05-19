using api_projecttracking.Common;
using api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projecttracking.Repository
{
    public class emp_repository
    {
        public List<Employee> ShowAllEmployees()
        {
            display d = new display();
            return d.employees.Select(emp => emp).ToList();
        }

        public void CreateEmployee(Employee employee)
        {
            display d = new display();
            d.employees.Add(employee);
            d.SaveChanges();
        }

        public Employee SearchById(int id, display d)
        {
            return (d.employees.Select(emp => emp).Where(emp => emp.Eid == id)).First();
        }

        public void Edit(Employee e,int id)
        {
            display d = new display();
            Employee emp = SearchById(id, d);
            emp.Ename = e.Ename;
            emp.Designation = e.Designation;
            emp.Mid = e.Mid;
            emp.Contactno = e.Contactno;
            emp.EmailId = e.EmailId;
            emp.Skillsets = e.Skillsets;
            d.SaveChanges();
        }

        public void Delete(int id)
        {
            display d = new display();
            Employee em = SearchById(id, d);
            d.employees.Remove(em);
            d.SaveChanges();
        }
    }
}