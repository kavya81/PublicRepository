using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using api_projecttracking.Common;
using api_projecttracking.Models;

namespace api_projecttracking.Repository
{
    public class managercomm_repository
    {
        public List<Managercomment> ShowAllComments()
        {
            display d = new display();
            return d.comments.Select(com => com).ToList();
        }

        public void CreateComment(Managercomment comment)
        {
            display d = new display();
            d.comments.Add(comment);
            d.SaveChanges();
        }

        public Managercomment SearchById(int id, display d)
        {
            return (d.comments.Select(com => com).Where(com => com.McId == id)).First();
        }

        public void Edit(Managercomment m, int id)
        {
            display d = new display();
            Managercomment man = SearchById(id, d);
            man.comment = m.comment;
            man.protaskId = m.protaskId;
            d.SaveChanges();
        }

        public void Delete(int id)
        {
            display d = new display();
            Managercomment mn = SearchById(id, d);
            d.comments.Remove(mn);
            d.SaveChanges();
        }
    }
}