using api_projecttracking.Common;
using api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_projecttracking.Repository
{
    public class task_repository
    {
        public List<Task> ShowAllTasks()
        {
            display db = new display();
            return db.tasks.Select(task => task).ToList();
        }

        public void CreateTask(Task task)
        {
            display d = new display();
            d.tasks.Add(task);
            d.SaveChanges();
        }

        public void Edit(Task t,int id)
        {
            display d = new display();
            Task ta = SearchById(id, d);
            ta.AssignedTo = t.AssignedTo;
            ta.EndDate = t.EndDate;
            ta.StartDate = t.StartDate;
            ta.Completion = t.Completion;
            ta.UserStoryId = t.UserStoryId;
            d.SaveChanges();
        }

        public Task SearchById(int id, display d)
        {
            return (d.tasks.Select(t => t).Where(t => t.ProjTaskId == id)).First();
        }

        public void Delete(int id)
        {
            display d = new display();
            Task tk = SearchById(id, d);
            d.tasks.Remove(tk);
            d.SaveChanges();
        }
    }
}