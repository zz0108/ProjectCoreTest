using Dapper;
using HeadSetProject.Repository.Home;
using HeadSetProject.ViewModels;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
namespace HeadSetProject.Services
{
    public class HomeService:IHrHomeRepository<HomeListViewModels>
    {
        private readonly IConfiguration _configuration;
        public HomeService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public HomeListViewModels GetHomeProducts()
        {
            var result = new HomeListViewModels();

            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = @"select p.Product_Name Name,TRIM(p.Type) Type,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id";
                var HomeProducts = conn.Query<HomeViewModels>(sql).ToList();
                result.Items = HomeProducts;
                return result;
            }
        }
        public HomeListViewModels GetHomeNsltProducts()
        {
            var result = new HomeListViewModels();

            using (SqlConnection conn = new SqlConnection(_configuration.GetConnectionString("HeadsetDatabase")))
            {
                string sql = @"select top 4 p.Product_Name Name,p.Price,pc.Picture Img,p.Manufacturer,pc.Color from Product_Table p
                               inner join Product_P_C_Table pc on pc.Product_Id = p.Product_Id";
                var HomeNsltProducts = conn.Query<HomeViewModels>(sql).ToList();
                result.Items = HomeNsltProducts;
                return result;
            }
        }
    }
}
