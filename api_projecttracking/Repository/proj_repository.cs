using api_projecttracking.Common;
using api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace api_projecttracking.Repository
{
    public class proj_repository
    {
        public List<Project> ShowAllProjects()
        {
            display db = new display();
            return db.projects.Select(pro => pro).ToList();
        }

        public void CreateProject(Project project)
        {
            display d = new display();
            d.projects.Add(project);
            d.SaveChanges();
        }

        public Project SearchById(int id, display d)
        {
            return (d.projects.Select(pro => pro).Where(pro => pro.Pid == id)).First();
        }

        public void Delete(int id)
        {
            display d = new display();
            Project pr = SearchById(id, d);
            d.projects.Remove(pr);
            d.SaveChanges();
        }

        public void Edit(Project p,int id)
        {
            display d = new display();
            Project pr = SearchById(id, d);
            pr.Pname = p.Pname;
            pr.StartDate = p.StartDate;
            pr.EndDate = p.EndDate;
            pr.Cname = p.Cname;
            d.SaveChanges();
        }

    }
}