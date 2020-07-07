using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeadSetProject.Services
{
    public class DataAccessService
    {
        private static string _connectionStr = "Data Source=suyifeng.database.windows.net;initial catalog = MyDB; persist security info=True;user id = suyifeng; password=Zz05210521;MultipleActiveResultSets=True;App=EntityFramework;";

        public static string connectionStr { get { return _connectionStr; } }
    }
}
