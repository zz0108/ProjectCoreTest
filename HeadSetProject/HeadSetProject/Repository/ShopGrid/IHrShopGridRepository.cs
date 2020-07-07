using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeadSetProject.Repository.ShopGrid
{
    public interface IHrShopGridRepository<T> where T : class
    {
        T GetShopGridProducts(string labels, int skip);
        T GetShopGridProducts(int skip);
        T GetShopGridLatestProducts(string labels);
        T GetShopGridLatestProducts();
        T GetShopGridDiscountProducts(string labels);
        T GetShopGridDiscountProducts();
    }
}
