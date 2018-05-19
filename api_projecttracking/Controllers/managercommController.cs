using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using api_projecttracking.Models;
using api_projecttracking.Repository;
using api_projecttracking.Common;

namespace api_projecttracking.Controllers
{
    public class managercommController : ApiController
    {
        // GET: api/managercomm
        public IEnumerable<Managercomment> Get()
        {
            display db = new display();
            return db.comments.Select(com => com).ToList();
        }

        // GET: api/managercomm/5
        public Managercomment Get(int id)
        {
            display db = new display();
            return db.comments.Where(com => com.McId == id).FirstOrDefault();
        }

        // POST: api/managercomm
        public void Post(Managercomment value)
        {
            managercomm_repository manrepo = new managercomm_repository();
            manrepo.CreateComment(value);
        }

        // PUT: api/managercomm/5
        public void Put(int id, Managercomment value)
        {
            managercomm_repository manrepo = new managercomm_repository();
            manrepo.Edit(value, id);
        }

        // DELETE: api/managercomm/5
        public void Delete(int id)
        {
            managercomm_repository manrepo = new managercomm_repository();
            manrepo.Delete(id);
        }
    }
}
