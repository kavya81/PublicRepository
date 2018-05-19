using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using api_projecttracking.Models;
using api_projecttracking.Common;
using api_projecttracking.Repository;
using System.Data.Entity;

namespace api_projecttracking.Controllers
{
    public class employeeController : ApiController
    {
        // GET: api/employee
        public IEnumerable<Employee> Get()
        {
            display db = new display();
            return db.employees.Select(emp => emp).ToList();
        }

        // GET: api/employee/5
        public Employee Get(int id)
        {
            display db = new display();
            return db.employees.Where(emp => emp.Eid == id).FirstOrDefault();
        }

        // POST: api/employee
        public void Post(Employee value)
        {
            display db = new display();
            db.employees.Add(value);
            db.SaveChanges();
        }

        // PUT: api/employee/5
        public void Put(int id, Employee value)
        {
            display db = new display();
            emp_repository emprepo = new emp_repository();
            emprepo.Edit(value,id);
        }

        // DELETE: api/employee/5
        public void Delete(int id)
        {
            emp_repository emprepo = new emp_repository();
            emprepo.Delete(id);
        }
    }
}
