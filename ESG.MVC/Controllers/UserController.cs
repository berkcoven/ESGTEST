using ESG.BLL.Repositories;
using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ESG.MVC.Controllers
{
    public class UserController : Controller
    {

        UserRepository ur = new UserRepository();
        TeamRepository tr = new TeamRepository();
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UserList()
        {
            var userlist = ur.SelectAll();

            
            return View(userlist);
        }


        public ActionResult UserDetail(int id)
        {
            User user = ur.SelectByID(id);
            user.UserTeam = tr.SelectByID(user.TeamID);
            ur.Delete(user);

            return View(user);
        }

        public ActionResult InviteList()
        {
            var activeuser = Session["login"];
            User user = ur.SelectAll().Where(x=>x==activeuser).FirstOrDefault();
            
            Team teaminvited = tr.SelectByID(user.TeamInvitationsID);
           

            return View(teaminvited);
        }

        public ActionResult RejectTeam()
        {
            var activeuser = Session["login"];
            User user = ur.SelectAll().Where(x => x == activeuser).FirstOrDefault();
            user.TeamInvitationsID = 0;


            return RedirectToAction("Index", "Home");
        }

    }
}