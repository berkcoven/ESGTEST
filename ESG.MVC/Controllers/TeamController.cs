using ESG.BLL.Repositories;
using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ESG.MVC.Controllers
{
    public class TeamController : Controller
    {
        TeamRepository tr = new TeamRepository();
        UserRepository ur = new UserRepository();

        // GET: Team
        public ActionResult Index(int id)
        {

            Team testteam = tr.SelectByID(id);
            var yoklama = ur.SelectAll().Where(x => x.TeamID == id).ToList();
            testteam.TeamUsers = yoklama;
            tr.Delete(testteam);


            var team = tr.SelectByID(id);
            return View(team);
        }
        public ActionResult MyTeam()
        {

            var leader = Session["login"];
            User teamleader = ur.SelectAll().Where(x => x == leader).FirstOrDefault();

            

            return RedirectToAction("Index", "Team", new { id = teamleader.TeamID });
        }


        public ActionResult CreateTeam()
        {
            var leader = Session["login"];
            User teamleader = ur.SelectAll().Where(x => x == leader).FirstOrDefault();

            return View();
        }

        [HttpPost]
        public ActionResult CreateTeam(Team team)
        {
            var leader = Session["login"];
            User teamleader= ur.SelectAll().Where(x => x == leader).FirstOrDefault();

            team.TeamLeader = teamleader;
            tr.Add(team);
            teamleader.TeamID = team.TeamID;
            ur.Delete(teamleader);
            

            return RedirectToAction("Index", "Team", new { id = team.TeamID });
        }

        public ActionResult TeamPage()
        {
            var activeUser = Session["login"];
            User activeUsers = ur.SelectAll().Where(x => x == activeUser).FirstOrDefault();
            
            return View(activeUsers);
        }

        public ActionResult InvitePlayer(int id)
        {
            var gonderen = Session["login"];
            User gonderenUser = ur.SelectAll().Where(x => x == gonderen).FirstOrDefault();
            var gonderenTeam = tr.SelectAll().Where(x => x.TeamLeader == gonderenUser).FirstOrDefault();

            User davetalanUser = ur.SelectByID(id);

            davetalanUser.TeamInvitationsID = tr.SelectAll().Where(x => x.TeamLeader == gonderenUser).FirstOrDefault().TeamID;
            ur.Delete(davetalanUser);
            
            return RedirectToAction("Index","Home");
        }
        public ActionResult TeamAccepted(int id)
        {
            Team team = tr.SelectByID(id);
            var player = Session["login"];
            User teamplayer = ur.SelectAll().Where(x => x == player).FirstOrDefault();
            teamplayer.TeamID = id;
            team.TeamUsers.Add(teamplayer);
            tr.Delete(team);

            return RedirectToAction("MyTeam", "Team");
        }



    }
}