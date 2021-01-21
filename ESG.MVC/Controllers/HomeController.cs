using ESG.BLL.Repositories;
using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ESG.MVC.Controllers
{
    public class HomeController : Controller
    {
        UserRepository ur = new UserRepository();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(User user)
        {
            //TODO: üye adı aynı varsa if
            User newUser = new User();
            try
            {
                newUser.UserMail = user.UserMail;
                newUser.UserPassword = user.UserPassword;
                newUser.UserName = "test";
                newUser.UserLastName = "test";
                newUser.UserSingedDate = DateTime.Now;
                newUser.TeamInvitationsID = 0;
                ur.Add(newUser);
                return RedirectToAction("Index", "Home");
            }
            catch (Exception ex)
            {
                return RedirectToAction("Register", "Home");
            }
           


        }

        public ActionResult LogOut()
        {
            Session["login"] = null;
            Session["KAdi"] = null;

            return RedirectToAction("Index","Home");
        }

        [HttpPost]
        public ActionResult Login(User user)
        {

            var users = ur.SelectAll().Where(x => x.UserMail == user.UserMail && x.UserPassword == user.UserPassword).FirstOrDefault();
            try
            {

                if (users != null)
                {
                    Session["login"] = users;
                    Session["KAdi"] = users.UserName + " " + users.UserLastName;
                    TempData["Basarili"] = "Basariyla Giriş Yaptınız.";
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    TempData["HatalıGiris"] = "Kullanıcı Adınız Veya Parolanız Hatalı, Lütfen Tekrar Deneyiniz.";
                    return RedirectToAction("Register", "Home");
                }

            }
            catch (Exception ex)
            {
                return RedirectToAction("Register", "Home");
            }


        }
    }
}