using ESG.BLL.Repositories;
using ESG.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ESG.MVC.Controllers
{
    public class NewsController : Controller
    {
        NewsRepository newsRepository = new NewsRepository();
        UserRepository ur = new UserRepository();
        // GET: News
        public ActionResult News()
        {
           

            var allNews = newsRepository.SelectAll();
            return View(allNews);
        }
        public ActionResult NewsDetail(int id)
        {
            var selectedNews = newsRepository.SelectByID(id);
            return View(selectedNews);


        }


        public ActionResult AddNews()
        {
            return View();
            

        }
    }
}