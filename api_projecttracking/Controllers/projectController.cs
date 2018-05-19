using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using api_projecttracking.Common;
using api_projecttracking.Models;
using api_projecttracking.Repository;

namespace api_projecttracking.Controllers
{
    public class projectController : ApiController
    {
        // GET: api/project
        public IEnumerable<Project> Get()
        {
            display db = new display();
            return db.projects.Select(pro => pro).ToList();
        }

        // GET: api/project/5
        public Project Get(int id)
        {
            display db = new display();
            return db.projects.Where(pro => pro.Pid == id).FirstOrDefault();
        }

        // POST: api/project
        public void Post(Project value)
        {
            proj_repository prorepo = new proj_repository();
            prorepo.CreateProject(value);
        }

        // PUT: api/project/5
        public void Put(int id, Project value)
        {
            proj_repository prorepo = new proj_repository();
            prorepo.Edit(value,id);
        }

        // DELETE: api/project/5
        public void Delete(int id)
        {
            proj_repository prorepo = new proj_repository();
            prorepo.Delete(id);
        }
    }
}
