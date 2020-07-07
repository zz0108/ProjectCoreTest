using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HeadSetProject.Models;
using HeadSetProject.Repository.Home;
using HeadSetProject.ViewModels;
using Newtonsoft.Json;

namespace HeadSetProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IHrHomeRepository<HomeListViewModels> _homejson;

        public HomeController(IHrHomeRepository<HomeListViewModels> homejson,
            ILogger<HomeController> logger)
        {
            _homejson = homejson;
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public JsonResult HomeJson()
        {
            var Js = JsonConvert.SerializeObject(_homejson.GetHomeProducts());
            return Json(Js);
        }
        public JsonResult HomeNsltJson()
        {
            var Js = JsonConvert.SerializeObject(_homejson.GetHomeNsltProducts());
            return Json(Js);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
