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
    public class userController : ApiController
    {
        // GET: api/user
        public IEnumerable<UserStories> Get()
        {
            display db = new display();
            return db.userstories.Select(user => user).ToList();
        }

        // GET: api/user/5
        public UserStories Get(int id)
        {
            display db = new display();
            return db.userstories.Where(user => user.UserId == id).FirstOrDefault();
        }

        // POST: api/user
        public void Post(UserStories value)
        {
            user_repository userepo = new user_repository();
            userepo.CreateUstories(value);
        }

        // PUT: api/user/5
        public void Put(int id, UserStories value)
        {
            user_repository userepo = new user_repository();
            userepo.Edit(value, id);
        }

        // DELETE: api/user/5
        public void Delete(int id)
        {
            user_repository userepo = new user_repository();
            userepo.Delete(id);
        }
    }
}
