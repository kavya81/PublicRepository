using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using api_projecttracking.Models;
using api_projecttracking.Common;
using api_projecttracking.Repository;

namespace api_projecttracking.Controllers
{
    public class tasksController : ApiController
    {
        // GET: api/tasks
        public IEnumerable<Task> Get()
        {
            display db = new display();
            return db.tasks.Select(task => task).ToList();
        }

        // GET: api/tasks/5
        public Task Get(int id)
        {
            display db = new display();
            return db.tasks.Where(task => task.ProjTaskId == id).FirstOrDefault();
        }

        // POST: api/tasks
        public void Post(Task value)
        {
            task_repository taskrepo = new task_repository();
            taskrepo.CreateTask(value);
        }

        // PUT: api/tasks/5
        public void Put(int id, Task value)
        {
            task_repository taskrepo = new task_repository();
            taskrepo.Edit(value,id);
        }

        // DELETE: api/tasks/5
        public void Delete(int id)
        {
            task_repository taskrepo = new task_repository();
            taskrepo.Delete(id);
        }
    }
}
