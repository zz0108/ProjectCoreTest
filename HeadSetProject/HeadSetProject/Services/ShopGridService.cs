using Dapper;
using HeadSetProject.Repository.ShopGrid;
using HeadSetProject.ViewModels.ShopGridViewModels;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeadSetProject.Services
{
    public class ShopGridService: IHrShopGridRepository<ShopGridListViewModels>
    {

        private readonly IConfiguration _configuration;
        public ShopGridService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ShopGridListViewModels GetShopGridProducts(string labels, int skip)
        {
            var result = new ShopGridListViewModels();

            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id
                               where p.Manufacturer = N'{labels}'";
                var ShopGridProducts = conn.Query<ShopGridViewModels>(sql).OrderBy(x => x.Name).Skip(skip * 9).Take(9).ToList();
                result.Items = ShopGridProducts;
                return result;
            }
        }
        public ShopGridListViewModels GetShopGridProducts(int skip)
        {
            var result = new ShopGridListViewModels();
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                                inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id";
                var ShopGridProducts = conn.Query<ShopGridViewModels>(sql).OrderBy(x => x.Name).Skip(skip * 9).Take(9).ToList();
                foreach (var item in ShopGridProducts)
                {
                    item.Manufacturer = "SHOP";
                }
                result.Items = ShopGridProducts;
                return result;
            }
        }
        public ShopGridListViewModels GetShopGridLatestProducts(string labels)
        {
            var result = new ShopGridListViewModels();
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id
                               where p.Manufacturer = N'{labels}'";
                var homeproducts = conn.Query<ShopGridViewModels>(sql).Distinct().Take(3).ToList();
                result.Items = homeproducts;
                return result;
            }
        }
        public ShopGridListViewModels GetShopGridLatestProducts()
        {
            var result = new ShopGridListViewModels();
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id";
                var ShopGridLatestProducts = conn.Query<ShopGridViewModels>(sql).Distinct().Take(3).ToList();
                result.Items = ShopGridLatestProducts;
                return result;
            }
        }
        public ShopGridListViewModels GetShopGridDiscountProducts(string labels)
        {
            var result = new ShopGridListViewModels();
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color,p.Type Category from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id
                               where p.Manufacturer = N'{labels}'";
                var ShopGridDiscountProducts = conn.Query<ShopGridViewModels>(sql).Distinct().Take(6).ToList();
                foreach (var item in ShopGridDiscountProducts)
                {
                    item.Discount = 1m;
                }
                result.Items = ShopGridDiscountProducts;
                return result;
            }
        }
        public ShopGridListViewModels GetShopGridDiscountProducts()
        {
            var result = new ShopGridListViewModels();
            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = $@"select p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color,p.Type Category from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id";
                var ShopGridDiscountProducts = conn.Query<ShopGridViewModels>(sql).Distinct().Take(6).ToList();
                foreach (var item in ShopGridDiscountProducts)
                {
                    item.Manufacturer = "SHOP";
                    item.Discount = 1m;
                }
                result.Items = ShopGridDiscountProducts;
                return result;
            }
        }
    }
}
