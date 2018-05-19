using api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace api_projecttracking.Common
{
    public class display : DbContext
    {
        public display() : base("Data Source=DESKTOP-38VD9LL\\SQLEXPRESS;Initial Catalog=mvc_project;Integrated Security=True")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;

        }

        public DbSet<Employee> employees { get; set; }
        public DbSet<Project> projects { get; set; }
        public DbSet<UserStories> userstories { get; set; }
        public DbSet<Task> tasks { get; set; }
        public DbSet<Managercomment> comments { get; set; }
    }
}