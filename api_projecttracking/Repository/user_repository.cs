using api_projecttracking.Common;
using api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projecttracking.Repository
{
    public class user_repository
    {
        public List<UserStories> ShowAllUserStories()
        {
            display db = new display();
            return db.userstories.Select(user => user).ToList();
        }

        public void CreateUstories(UserStories user)
        {
            display d = new display();
            d.userstories.Add(user);
            d.SaveChanges();
        }

        public void Edit(UserStories ua,int id)
        {
            display d = new display();
            UserStories us = SearchById(id, d);
            us.Story = ua.Story;
            us.ProId = ua.ProId;
            d.SaveChanges();
        }

        public UserStories SearchById(int id, display d)
        {
            return (d.userstories.Select(use => use).Where(use => use.UserId == id)).First();
        }

        public void Delete(int id)
        {
            display d = new display();
            UserStories us = SearchById(id, d);
            d.userstories.Remove(us);
            d.SaveChanges();
        }
    }
}