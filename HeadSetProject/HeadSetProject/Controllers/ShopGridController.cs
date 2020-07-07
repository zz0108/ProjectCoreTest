using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace HeadSetProject.Controllers
{
    public class ShopGridController : Controller
    {
        // [Area("ShopGrid")]
        public IActionResult Index(string name, int? skip)
        {
            if (skip == null)
            {
                skip = 0;
            }
            int i = 0;
            return View();
        }
        //public JsonResult ShopGridJson()
        //{
        //    HttpCookie Cookie = Request.Cookies.Get("Manufacturer");
        //    string label = HttpUtility.UrlDecode(Cookie.Values["labels"].ToString());
        //    int skip = int.Parse(Cookie.Values["skip"]);


        //    if (label == "SHOP")
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridProducts(skip));
        //        return Json(Js);
        //    }
        //    else
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridProducts(skip));
        //        return Json(Js);
        //    }

        //}
        //public JsonResult ShopGridtoLatestJson()
        //{
        //    HttpCookie Cookie = Request.Cookies.Get("Manufacturer");
        //    string label = HttpUtility.UrlDecode(Cookie.Values["labels"].ToString());

        //    if (label == "SHOP")
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridLatestProducts());
        //        return Json(Js);
        //    }
        //    else
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridLatestProducts(label));
        //        return Json(Js);
        //    }
        //}


        //public JsonResult ShopGridtoDiscountJson()
        //{
        //    HttpCookie Cookie = Request.Cookies.Get("Manufacturer");
        //    string label = HttpUtility.UrlDecode(Cookie.Values["labels"].ToString());


        //    if (label == "SHOP")
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridDiscountProducts());
        //        return Json(Js);
        //    }
        //    else
        //    {
        //        var Js = JsonConvert.SerializeObject(_gridjson.GetShopGridDiscountProducts(label));
        //        return Json(Js);
        //    }
        //}
    }
}
